FROM python:3.10-slim

WORKDIR /app

# 기본 패키지 설치
RUN apt-get update && apt-get install -y \
    git \
    curl \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# PyTorch + HuggingFace 관련 패키지 설치
# CPU 기본, GPU 환경에서는 nvidia-container-runtime 통해 GPU 자동 연결됨
RUN pip install --no-cache-dir \
    torch \
    torchvision \
    torchaudio \
    fastapi \
    "uvicorn[standard]" \
    transformers \
    sentencepiece \
    sacremoses \ 
    accelerate \
    huggingface_hub \
    safetensors

# 코드 복사
COPY . /app

# 모델 미리 다운로드 (캐시 포함 → 이미지 커짐)
RUN python -c "from transformers import pipeline; \
    pipeline('translation', model='facebook/nllb-200-600M', src_lang='eng_Latn', tgt_lang='kor_Hang')"

# FastAPI 실행
CMD ["uvicorn", "server_nllb:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "1", "--loop", "uvloop", "--http", "httptools"]
