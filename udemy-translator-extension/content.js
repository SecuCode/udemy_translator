// ====== 유틸: 타임스탬프 로그 ======
function logWithTime(...args) {
  const now = Date.now();
  console.log(`[${now}]`, ...args);
}

// ====== 번역 함수 ======
function translateAndReplace(el) {
  const original = el.textContent;
  if (!original || !original.trim()) return;

  // 이미 번역 중이거나 같은 텍스트가 번역된 상태면 무시
  if (el.dataset.translating === "true") {
    logWithTime("⏩ 번역 중인 노드 무시:", original);
    return;
  }
  if (el.dataset.translated === "true" && el.dataset.lastText === original) {
    logWithTime("⏩ 이미 번역된 텍스트 무시:", original);
    return;
  }

  const startTime = Date.now();
  logWithTime("🎬 번역 대상 자막 발견:", original);

  el.dataset.translating = "true";
  el.dataset.lastText = original;

  chrome.runtime.sendMessage(
    { action: "translate", text: original },
    (response) => {
      const elapsed = Date.now() - startTime;
      if (response?.translated) {
        logWithTime(
          `✅ 번역 성공 [${elapsed}ms]:`,
          original,
          "➡",
          response.translated
        );
        el.textContent = response.translated;
        el.dataset.translated = "true";
      } else {
        console.error("❌ 번역 실패:", response?.error);
        el.dataset.translated = "false";
      }
      el.dataset.translating = "false";
    }
  );
}

// ====== MutationObserver (DOM + 텍스트 변경 감지) ======
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === "childList" && mutation.addedNodes.length) {
      mutation.addedNodes.forEach((node) => {
        if (
          node.nodeType === 1 &&
          node.matches("div[data-purpose='captions-cue-text']") &&
          node.textContent.trim()
        ) {
          logWithTime("🔍 자막 DOM 추가 감지:", node.textContent);
          translateAndReplace(node);
        }
      });
    } else if (mutation.type === "characterData") {
      const el = mutation.target.parentElement;
      if (
        el &&
        el.matches("div[data-purpose='captions-cue-text']") &&
        el.textContent.trim()
      ) {
        if (el.dataset.lastText !== el.textContent) {
          el.dataset.translated = "false";
          el.dataset.translating = "false";
          el.dataset.lastText = el.textContent;

          logWithTime("🔄 자막 텍스트 변경 감지:", el.textContent);
          translateAndReplace(el);
        }
      }
    }
  }
});

// ====== 옵저버 초기화 ======
function initObserver() {
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true, // 텍스트 변경 감지 활성화
  });
  logWithTime("🎬 Udemy Translator: 자막 감시 시작");
}

// ====== 보조 체크 (누락 방지) ======
setInterval(() => {
  document
    .querySelectorAll("div[data-purpose='captions-cue-text']")
    .forEach((el) => {
      if (!el.dataset.translated && el.textContent.trim()) {
        logWithTime("🔍 보조탐색 자막 발견:", el.textContent);
        translateAndReplace(el);
      }
    });
}, 5000); // 5초마다 실행

// ====== 미리 번역(Pre-translate: MTPE 느낌) ======
function preTranslateSubtitles() {
  document.querySelectorAll("div[data-purpose='captions-cue-text']").forEach((el) => {
    if (!el.dataset.translated && !el.dataset.translating && el.textContent.trim()) {
      logWithTime("🕒 미리 번역 준비:", el.textContent);
      translateAndReplace(el);
    }
  });
}
// 1초마다 프리패치 실행
setInterval(preTranslateSubtitles, 1000);

// ====== 실행 시작 ======
initObserver();
