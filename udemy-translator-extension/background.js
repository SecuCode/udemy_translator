const API_URL = "http://localhost:8000/translate";

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
        console.log("[Udemy Translator] Result:", data.translated_text);
        sendResponse({ translated: data.translated_text });
      })
      .catch(err => {
        console.error("[Udemy Translator] Error:", err);
        sendResponse({ error: err.toString() });
      });
    return true; // async 응답 허용
  }
});
