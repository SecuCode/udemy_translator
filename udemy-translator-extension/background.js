// ====== 서버 설정 ======
// 공인 IP를 통한 외부 접근 (공유기 포트포워딩)
const API_BASE = "http://180.233.248.84:8000";
const API_URL = `${API_BASE}/translate`;

// 로컬 폴백 (같은 네트워크에서 사용 시)
const LOCAL_API_URL = "http://localhost:8000/translate";

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "translate") {
    console.log("[Udemy Translator] Translating:", msg.text);
    
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: msg.text })
    })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log("[Udemy Translator] Result (remote):", data.translated_text);
        sendResponse({ translated: data.translated_text });
      })
      .catch(err => {
        console.warn("[Udemy Translator] Remote failed, trying local:", err.message);
        fetch(LOCAL_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: msg.text })
        })
          .then(res => res.json())
          .then(data => {
            console.log("[Udemy Translator] Result (local):", data.translated_text);
            sendResponse({ translated: data.translated_text });
          })
          .catch(err2 => {
            console.error("[Udemy Translator] All failed:", err2);
            sendResponse({ error: err2.toString() });
          });
      });
    return true;
  }
});
