FROM nvidia/cuda:12.1.0-runtime-ubuntu22.04

WORKDIR /app

# Python + 기본 패키지 + SSH 서버 설치
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    git \
    curl \
    openssh-server \
    && rm -rf /var/lib/apt/lists/* \
    && ln -sf /usr/bin/python3 /usr/bin/python

# SSH 설정
RUN mkdir -p /var/run/sshd \
    && echo 'root:udemy2024!' | chpasswd \
    && sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config \
    && sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config \
    && echo "Port 22" >> /etc/ssh/sshd_config

# PyTorch GPU (CUDA 12.1)
RUN pip install --no-cache-dir torch==2.4.1 --index-url https://download.pytorch.org/whl/cu121

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

# 시작 스크립트 (SSH + FastAPI)
# 첫 실행 시 NLLB 3.3B 모델 다운로드 (~6.5GB, 약 5-10분)
RUN printf '#!/bin/bash\n/usr/sbin/sshd\nexec uvicorn server_nllb:app --host 0.0.0.0 --port 8000 --workers 1 --loop uvloop --http httptools\n' > /app/start.sh && chmod +x /app/start.sh

EXPOSE 8000 22

VOLUME ["/root/.cache/huggingface"]

CMD ["/app/start.sh"]
