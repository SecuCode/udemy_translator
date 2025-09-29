# server_nllb.py
from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline
import torch

app = FastAPI()

class TranslationRequest(BaseModel):
    text: str

# ------- 설정: 품질 최우선 모델 -------
MODEL = "facebook/nllb-200-distilled-600M" #"facebook/nllb-200-distilled-600M" #"facebook/nllb-200-3.3B"   # <-- 최고품>
질 권장
SRC_LANG = "eng_Latn"              # FLORES-200 형식
TGT_LANG = "kor_Hang"              # 한국어(한글) 코드
# ---------------------------------------

# GPU 있으면 device=0, 없으면 device=-1 (CPU)
device = 0 if torch.cuda.is_available() else -1

pipeline_kwargs = {}
if device == 0:
    # GPU가 있으면 FP16으로 로드 (메모리 절감)
    pipeline_kwargs["torch_dtype"] = torch.float16

# pipeline에 src_lang, tgt_lang 넘겨서 번역 (transformers 문서 권장 방식)
translator = pipeline(
    "translation",
    model=MODEL,
    src_lang=SRC_LANG,
    tgt_lang=TGT_LANG,
    device=device,
    **pipeline_kwargs
)

@app.post("/translate")
async def translate(req: TranslationRequest):
    # pipeline은 리스트 형태의 결과 반환 (여기선 단일 문장)
    out = translator(
            req.text,
            max_length=128,
            num_beams=1,
            do_sample=False,)
    # 예: [{"translation_text": "..."}]
    return {"translated_text": out[0]["translation_text"]}

if __name__ == "__main__":
    import uvicorn
# server_nllb.py
from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline
import torch

app = FastAPI()

class TranslationRequest(BaseModel):
    text: str

# ------- 설정: 품질 최우선 모델 -------
MODEL = "facebook/nllb-200-distilled-600M" #"facebook/nllb-200-distilled-600M" #"facebook/nllb-200-3.3B"   # <-- 최고품>
질 권장
SRC_LANG = "eng_Latn"              # FLORES-200 형식
TGT_LANG = "kor_Hang"              # 한국어(한글) 코드
# ---------------------------------------

# GPU 있으면 device=0, 없으면 device=-1 (CPU)
device = 0 if torch.cuda.is_available() else -1

pipeline_kwargs = {}
if device == 0:
    # GPU가 있으면 FP16으로 로드 (메모리 절감)
    pipeline_kwargs["torch_dtype"] = torch.float16

# pipeline에 src_lang, tgt_lang 넘겨서 번역 (transformers 문서 권장 방식)
translator = pipeline(
    "translation",
    model=MODEL,
    src_lang=SRC_LANG,
    tgt_lang=TGT_LANG,
    device=device,
    **pipeline_kwargs
)

@app.post("/translate")
async def translate(req: TranslationRequest):
    # pipeline은 리스트 형태의 결과 반환 (여기선 단일 문장)
    out = translator(
            req.text,
            max_length=128,
            num_beams=1,
            do_sample=False,)
    # 예: [{"translation_text": "..."}]
    return {"translated_text": out[0]["translation_text"]}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)