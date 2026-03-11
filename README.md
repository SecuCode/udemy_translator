# 🎬 Udemy 실시간 자막 번역기 (Docker Edition)

Udemy 강의 자막을 **실시간**으로 한국어로 번역하는 시스템입니다.
브라우저 확장(Chrome)이 자막을 감지하고, Docker 컨테이너 내 FastAPI 서버에서 **Meta NLLB-200 600M** 모델로 번역합니다.

> ⚡ DeepL 수준에 가까운 번역 경험을 **무료**로, 로컬/원격 환경에서 제공

---

## 📂 프로젝트 구조

```
udemy-translator/
├── server_nllb.py                  # FastAPI 번역 서버 (NLLB-200 600M 기반)
├── Dockerfile                      # Docker 이미지 (Python + SSH + 번역 모델)
├── docker-compose.yml              # 컨테이너 오케스트레이션
├── requirements.txt                # Python 의존성
├── udemy-translator.service        # systemd 서비스 파일 (비-Docker용)
└── udemy-translator-extension/     # Chrome 확장 프로그램
    ├── manifest.json
    ├── content.js                  # 자막 감지 + 번역 요청
    └── background.js               # 서비스 워커
```

---

## 🐳 Docker로 설치 및 실행

### 사전 요구사항

| 항목 | 최소 버전 | 확인 명령 |
|------|-----------|-----------|
| Docker | 20.10+ | `docker --version` |
| Docker Compose | v2+ | `docker compose version` |
| 디스크 공간 | ~5GB | 모델 다운로드 포함 |
| RAM | 4GB+ | 번역 모델 로딩 필요 |

### 1단계: 레포지토리 클론

```bash
git clone https://github.com/SecuCode/udemy_translator.git
cd udemy_translator
```

### 2단계: Docker 빌드 및 실행

```bash
# 빌드 (최초 1회, 모델 다운로드 포함 → 10~20분 소요)
docker compose build

# 컨테이너 실행
docker compose up -d
```

### 3단계: 서버 동작 확인

```bash
# 헬스체크
curl http://localhost:8000/health

# 번역 테스트
curl -X POST http://localhost:8000/translate \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello, how are you?"}'
```

정상 응답 예시:
```json
{"translated_text": "안녕하세요, 어떻게 지내세요?"}
```

---

## 🔌 포트 명세

| 포트 (호스트) | 포트 (컨테이너) | 프로토콜 | 용도 |
|:---:|:---:|:---:|------|
| **8000** | 8000 | HTTP | FastAPI 번역 API 서버 |
| **2222** | 22 | SSH | 컨테이너 SSH 접속 |

> ⚠️ **방화벽 설정**: 외부에서 접근하려면 호스트의 방화벽에서 8000, 2222 포트를 열어야 합니다.

---

## 🔐 SSH 접속 방법

```bash
# 로컬에서 접속
ssh root@localhost -p 2222

# 원격에서 접속 (서버 IP로 교체)
ssh root@<서버IP> -p 2222
```

| 항목 | 값 |
|------|-----|
| 사용자 | `root` |
| 기본 비밀번호 | `udemy2024!` |
| 포트 | `2222` |

> ⚠️ **보안 주의**: 프로덕션 환경에서는 반드시 비밀번호를 변경하거나 SSH 키 인증으로 전환하세요.

비밀번호 변경 방법:
```bash
# SSH 접속 후
passwd root
```

---

## 🌐 Chrome 확장 프로그램 설치

1. Chrome에서 `chrome://extensions/` 접속
2. 우측 상단 **개발자 모드** 활성화
3. **"압축해제된 확장 프로그램을 로드합니다"** 클릭
4. `udemy-translator-extension/` 폴더 선택
5. Udemy 강의 페이지에서 자막이 자동으로 한국어 번역됨

> 💡 **원격 서버 사용 시**: `content.js`에서 API 주소를 서버 IP로 변경해야 합니다.
> ```javascript
> // content.js 상단의 서버 주소를 변경
> const SERVER_URL = "http://<서버IP>:8000";
> ```

---

## 📋 자주 쓰는 Docker 명령어

```bash
# 컨테이너 상태 확인
docker compose ps

# 실시간 로그 보기
docker compose logs -f

# 컨테이너 중지
docker compose down

# 컨테이너 재시작
docker compose restart

# 이미지 재빌드 (코드 변경 시)
docker compose build --no-cache
docker compose up -d
```

---

## 🖥️ GPU 사용 (선택사항)

NVIDIA GPU가 있는 경우, `docker-compose.yml`에서 GPU 섹션 주석을 해제하세요:

```yaml
services:
  udemy-translator:
    # ... 기존 설정 ...
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]
```

사전 요구사항:
- [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html) 설치
- NVIDIA 드라이버 설치 완료

---

## ⚡ 성능 최적화 팁

| 팁 | 설명 |
|----|------|
| GPU 사용 | NVIDIA GPU 시 자동 CUDA 활용, FP16 추론 |
| 경량 모델 | `nllb-200-distilled-600M` → 빠른 속도 + 적절한 품질 |
| RTT 최소화 | `uvloop` + `httptools` 옵션으로 지연 최소화 |
| 자동 캐싱 | 모델 캐시를 Docker Volume으로 영속화 |

---

## 🔧 트러블슈팅

### Docker 빌드 실패
```bash
# Docker Desktop이 실행 중인지 확인
docker info

# 디스크 공간 확인 (최소 5GB 필요)
docker system df
```

### 번역 서버 응답 없음
```bash
# 컨테이너 로그 확인
docker compose logs udemy-translator

# 컨테이너 내부 직접 확인
docker exec -it udemy-translator bash
```

### 모델 다운로드 중 메모리 부족
빌드 시 모델을 미리 다운로드하므로, 빌드 머신에 최소 4GB RAM이 필요합니다.

---

## 📜 API 명세

### `GET /health`
서버 상태 확인

**응답:**
```json
{
  "status": "ok",
  "model": "facebook/nllb-200-distilled-600M",
  "device": "CPU"
}
```

### `POST /translate`
텍스트 번역 (영어 → 한국어)

**요청:**
```json
{
  "text": "This is a sample subtitle text"
}
```

**응답:**
```json
{
  "translated_text": "이것은 샘플 자막 텍스트입니다"
}
```

---

## 📜 라이선스

- 번역 모델: [Meta NLLB-200 (MIT License)](https://github.com/facebookresearch/fairseq/tree/nllb)
- 코드: MIT License
