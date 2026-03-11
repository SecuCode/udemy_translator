# server_nllb.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import torch

# torch.load 패치: weights_only 기본값 문제 해결 (transformers 내부 호출 포함)
import functools
_original_torch_load = torch.load
@functools.wraps(_original_torch_load)
def _patched_torch_load(*args, **kwargs):
    if 'weights_only' not in kwargs:
        kwargs['weights_only'] = False
    return _original_torch_load(*args, **kwargs)
torch.load = _patched_torch_load

from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

app = FastAPI()

# CORS 설정 - 브라우저 확장에서 접근 허용
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TranslationRequest(BaseModel):
    text: str

# ------- 설정 -------
MODEL_NAME = "facebook/nllb-200-distilled-600M"
SRC_LANG = "eng_Latn"    # 영어 (FLORES-200 코드)
TGT_LANG = "kor_Hang"    # 한국어 (FLORES-200 코드)
# ---------------------

# GPU 있으면 CUDA, 없으면 CPU
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

print(f"[INFO] Loading model: {MODEL_NAME}")
print(f"[INFO] Device: {device}")

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSeq2SeqLM.from_pretrained(MODEL_NAME, use_safetensors=True).to(device)

if device.type == "cuda":
    model = model.half()  # FP16 for GPU

print(f"[INFO] Model loaded successfully!")

@app.get("/health")
async def health_check():
    return {
        "status": "ok",
        "model": MODEL_NAME,
        "device": str(device)
    }

@app.post("/translate")
async def translate(req: TranslationRequest):
    # 토크나이저에 소스 언어 설정
    tokenizer.src_lang = SRC_LANG
    
    # 입력 토크나이즈
    inputs = tokenizer(req.text, return_tensors="pt", max_length=128, truncation=True).to(device)
    
    # 타겟 언어의 토큰 ID
    forced_bos_token_id = tokenizer.convert_tokens_to_ids(TGT_LANG)
    
    # 번역 생성
    with torch.no_grad():
        outputs = model.generate(
            **inputs,
            forced_bos_token_id=forced_bos_token_id,
            max_new_tokens=128,
            num_beams=1,
            do_sample=False,
        )
    
    translated = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return {"translated_text": translated}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)