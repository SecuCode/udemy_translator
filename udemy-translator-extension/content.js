// ====== Udemy Translator - Content Script (v2.0) ======
// 다중 셀렉터 + 폴백 + 디버깅 모드 지원

const CONFIG = {
  // 자막 감지에 사용할 셀렉터 (우선순위 순서)
  SUBTITLE_SELECTORS: [
    '[data-purpose="captions-cue-text"]',                        // 기본 (태그 무관)
    '[class*="captions-display--captions-cue-text"]',           // CSS Module 폴백
    '[class*="captions-display"] [class*="cue-text"]',          // 중첩 구조 폴백
    '[class*="caption"] [class*="cue"]',                         // 일반적 폴백
    '.well--text--yMHEQ',                                        // Udemy 최근 구조
  ],
  POLL_INTERVAL: 2000,       // 폴링 간격 (ms)
  PRE_TRANSLATE_INTERVAL: 1500,
  DEBUG: true,               // 콘솔 로그 출력
};

// ====== 유틸 ======
function log(...args) {
  if (CONFIG.DEBUG) {
    console.log(`[UdemyTranslator ${new Date().toLocaleTimeString()}]`, ...args);
  }
}

function logError(...args) {
  console.error(`[UdemyTranslator ERROR]`, ...args);
}

// ====== 셀렉터로 자막 요소 찾기 ======
function findSubtitleElements() {
  for (const selector of CONFIG.SUBTITLE_SELECTORS) {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      log(`✅ 셀렉터 매치: "${selector}" → ${elements.length}개 요소`);
      return { elements, selector };
    }
  }
  return { elements: [], selector: null };
}

// ====== 자막 요소인지 판별 ======
function isSubtitleElement(node) {
  if (node.nodeType !== 1) return false;
  for (const selector of CONFIG.SUBTITLE_SELECTORS) {
    try {
      if (node.matches(selector)) return true;
      // 자식 중에 자막 요소가 있는지도 확인
      if (node.querySelector(selector)) return true;
    } catch (e) { /* 무시 */ }
  }
  return false;
}

// ====== 단일 요소에서 매칭되는 셀렉터 찾기 ======
function matchesAnySelector(el) {
  if (!el || el.nodeType !== 1) return false;
  for (const selector of CONFIG.SUBTITLE_SELECTORS) {
    try {
      if (el.matches(selector)) return true;
    } catch (e) { /* 무시 */ }
  }
  return false;
}

// ====== 번역 함수 ======
function translateAndReplace(el) {
  const original = el.textContent;
  if (!original || !original.trim()) return;

  // 이미 번역 중이면 무시
  if (el.dataset.utTranslating === "true") return;
  // 같은 텍스트가 이미 번역되었으면 무시
  if (el.dataset.utTranslated === "true" && el.dataset.utLastText === original) return;

  log("🎬 번역 요청:", original);
  el.dataset.utTranslating = "true";
  el.dataset.utLastText = original;

  const startTime = Date.now();

  chrome.runtime.sendMessage(
    { action: "translate", text: original },
    (response) => {
      const elapsed = Date.now() - startTime;

      // 확장이 무효화된 경우 (콘텍스트 손실)
      if (chrome.runtime.lastError) {
        logError("확장 통신 오류:", chrome.runtime.lastError.message);
        el.dataset.utTranslating = "false";
        return;
      }

      if (response?.translated) {
        log(`✅ [${elapsed}ms] "${original}" → "${response.translated}"`);
        el.textContent = response.translated;
        el.dataset.utTranslated = "true";
      } else {
        logError(`❌ 번역 실패 [${elapsed}ms]:`, response?.error || "응답 없음");
        el.dataset.utTranslated = "false";
      }
      el.dataset.utTranslating = "false";
    }
  );
}

// ====== MutationObserver ======
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    // 새로운 노드가 추가된 경우
    if (mutation.type === "childList" && mutation.addedNodes.length) {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType !== 1) return;

        // 추가된 노드 자체가 자막 요소인지 확인
        if (matchesAnySelector(node) && node.textContent.trim()) {
          log("🔍 자막 노드 추가:", node.textContent);
          translateAndReplace(node);
          return;
        }

        // 추가된 노드의 자식 중 자막 요소 탐색
        for (const selector of CONFIG.SUBTITLE_SELECTORS) {
          try {
            const subtitles = node.querySelectorAll(selector);
            subtitles.forEach((sub) => {
              if (sub.textContent.trim()) {
                log("🔍 자막 자식 노드 발견:", sub.textContent);
                translateAndReplace(sub);
              }
            });
            if (subtitles.length > 0) break;
          } catch (e) { /* 무시 */ }
        }
      });
    }

    // 텍스트 내용 변경 감지
    if (mutation.type === "characterData") {
      const el = mutation.target.parentElement;
      if (el && matchesAnySelector(el) && el.textContent.trim()) {
        if (el.dataset.utLastText !== el.textContent) {
          el.dataset.utTranslated = "false";
          el.dataset.utTranslating = "false";
          log("🔄 자막 텍스트 변경:", el.textContent);
          translateAndReplace(el);
        }
      }
    }
  }
});

// ====== 옵저버 시작 ======
function initObserver() {
  if (!document.body) {
    log("⏳ document.body 대기 중...");
    setTimeout(initObserver, 500);
    return;
  }
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });
  log("🎬 MutationObserver 시작됨");
}

// ====== 폴링: 누락 방지 ======
function pollForSubtitles() {
  const { elements, selector } = findSubtitleElements();
  elements.forEach((el) => {
    if (el.dataset.utTranslated !== "true" && el.dataset.utTranslating !== "true" && el.textContent.trim()) {
      log("📡 폴링 발견:", el.textContent);
      translateAndReplace(el);
    }
  });
}

// ====== 초기화 ======
log("🚀 Udemy Translator v2.0 시작");
log("📋 등록된 셀렉터:", CONFIG.SUBTITLE_SELECTORS);

initObserver();
setInterval(pollForSubtitles, CONFIG.POLL_INTERVAL);

// ====== 진단 도구 (콘솔에서 수동 실행 가능) ======
window.__udemyTranslatorDiag = function() {
  console.group("🔧 Udemy Translator 진단");
  
  // 1. 각 셀렉터별 매치 결과
  console.log("=== 셀렉터 검사 ===");
  for (const sel of CONFIG.SUBTITLE_SELECTORS) {
    const els = document.querySelectorAll(sel);
    console.log(`${els.length > 0 ? '✅' : '❌'} "${sel}" → ${els.length}개`);
    if (els.length > 0) {
      els.forEach((el, i) => console.log(`  [${i}]`, el.tagName, el.className, `"${el.textContent.substring(0, 50)}"`));
    }
  }

  // 2. data-purpose 속성 가진 모든 요소 검색
  console.log("\n=== data-purpose 속성 검색 ===");
  const dpElements = document.querySelectorAll("[data-purpose]");
  const purposeValues = new Set();
  dpElements.forEach(el => purposeValues.add(el.dataset.purpose));
  const captionRelated = [...purposeValues].filter(v => 
    v.toLowerCase().includes("caption") || v.toLowerCase().includes("subtitle") || v.toLowerCase().includes("cue")
  );
  console.log("자막 관련 data-purpose:", captionRelated.length > 0 ? captionRelated : "없음");
  console.log("전체 data-purpose 값:", [...purposeValues].join(", "));

  // 3. caption/subtitle 관련 클래스 검색
  console.log("\n=== 자막 관련 클래스 검색 ===");
  const allElements = document.querySelectorAll("*");
  const captionClasses = new Set();
  allElements.forEach(el => {
    if (el.className && typeof el.className === 'string') {
      el.className.split(/\s+/).forEach(cls => {
        if (cls.match(/caption|subtitle|cue|transcript/i)) {
          captionClasses.add(cls);
        }
      });
    }
  });
  console.log("자막 관련 클래스:", captionClasses.size > 0 ? [...captionClasses] : "없음");

  // 4. 서버 연결 확인
  console.log("\n=== 서버 연결 확인 ===");
  fetch("http://localhost:8000/health")
    .then(r => r.json())
    .then(d => console.log("✅ 서버 상태:", d))
    .catch(e => console.log("❌ 서버 연결 실패:", e.message));

  console.groupEnd();
};

log("💡 진단 도구: 콘솔에서 __udemyTranslatorDiag() 실행");
