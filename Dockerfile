FROM python:3.10-slim

WORKDIR /app

# 기본 패키지 + SSH 서버 설치
RUN apt-get update && apt-get install -y \
    git \
    curl \
    build-essential \
    openssh-server \
    && rm -rf /var/lib/apt/lists/*

# SSH 설정
RUN mkdir -p /var/run/sshd \
    && echo 'root:udemy2024!' | chpasswd \
    && sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config \
    && sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config \
    && echo "Port 22" >> /etc/ssh/sshd_config

# PyTorch CPU 전용 설치 (2.4.1 - weights_only 이전 안정 버전)
RUN pip install --no-cache-dir torch==2.4.1 --index-url https://download.pytorch.org/whl/cpu

# HuggingFace + FastAPI 관련 패키지 설치
RUN pip install --no-cache-dir \
    fastapi \
    "uvicorn[standard]" \
    transformers \
    sentencepiece \
    sacremoses \
    accelerate \
    huggingface_hub \
    safetensors \
    protobuf

# 소스 코드 복사
COPY server_nllb.py /app/server_nllb.py
COPY requirements.txt /app/requirements.txt

# 시작 스크립트 생성 (SSH + FastAPI 동시 실행)
# 첫 실행 시 NLLB 모델 자동 다운로드 (~1.2GB, 약 2-5분 소요)
RUN printf '#!/bin/bash\n/usr/sbin/sshd\nexec uvicorn server_nllb:app --host 0.0.0.0 --port 8000 --workers 1 --loop uvloop --http httptools\n' > /app/start.sh && chmod +x /app/start.sh

# 포트 노출: 8000 (API), 22 (SSH)
EXPOSE 8000 22

# 모델 캐시 디렉토리
VOLUME ["/root/.cache/huggingface"]

CMD ["/app/start.sh"]
