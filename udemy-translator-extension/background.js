chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "translate") {
    fetch("http://localhost:8000/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: msg.text })
    })
      .then(res => res.json())
      .then(data => {
        // 서버가 { translated_text: "..." } 리턴 → translated로 변환
        sendResponse({ translated: data.translated_text });
      })
      .catch(err => {
        console.error("Translation error:", err);
        sendResponse({ error: err.toString() });
      });
    return true; // async 응답 허용
  }
});
