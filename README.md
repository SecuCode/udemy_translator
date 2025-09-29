# 🎬 Udemy 실시간 자막 번역기

## 📌 개요
Udemy 강의 자막을 **실시간으로 한국어로 번역**하는 브라우저 확장 + 로컬 번역 서버입니다.  
브라우저 확장(`content.js`)이 자막을 감지하고, FastAPI 서버(`server_nllb.py`)에서 **NLLB-200 600M** 모델을 이용해 번역합니다.  

⚡ **목표:** DeepL 수준에 가까운 번역 경험을 무료로, 로컬 환경에서 제공

---

## 📂 프로젝트 구조
```
udemy-translator/
├── backend/
│   └── server_nllb.py     # FastAPI 번역 서버 (NLLB-200 600M 기반)
├── extension/
│   ├── manifest.json      # 크롬 확장 설정
│   ├── content.js         # 자막 감지 + 번역 요청 스크립트
│   └── icons/             # 확장 아이콘
└── README.md
```

---

## ⚙️ 설치 방법

### 1. Python 환경 준비
- Python **3.9+** 권장 (Windows/Linux/Mac 모두 가능)

```bash
# (선택) 가상환경 생성
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

# 필수 라이브러리 설치
pip install fastapi uvicorn transformers torch sentencepiece sacremoses
```

---

### 2. 번역 서버 실행
```bash
cd backend
uvicorn server_nllb:app --host 0.0.0.0 --port 8000     --workers 1 --loop uvloop --http httptools
```

- `--loop uvloop` + `--http httptools` → **지연시간 최소화**
- `--workers 1` → 모델 중복 로딩 방지

서버가 정상 실행되면:
```
INFO:     Uvicorn running on http://0.0.0.0:8000
```

---

### 3. 브라우저 확장 설치 (Chrome 기준)

1. `chrome://extensions/` 접속  
2. 우측 상단 **개발자 모드 활성화**  
3. **압축해제된 확장 프로그램 로드** 선택  
4. `extension/` 폴더 선택  

설치 후 Udemy 강의 페이지에 접속하면, 자막이 감지될 때마다 자동 번역됩니다.

---

## 🔧 사용법
1. 터미널에서 번역 서버 실행  
2. 크롬에서 확장 프로그램 활성화  
3. Udemy 강의 영상 재생 → 자막이 뜨자마자 **자동 한국어 번역** 표시  

---

## ⚡ 성능 최적화 팁
- **GPU 사용**  
  NVIDIA GPU가 있다면 자동으로 CUDA 사용. (AMD GPU는 OpenCL 미지원 → CPU 사용)
- **경량 모델 사용**  
  `facebook/nllb-200-600M` 모델은 속도가 빠르고 자막 번역에 적합
- **RTT 최소화**  
  서버 실행 시 `--loop uvloop --http httptools` 옵션 필수
- **사전 번역 캐싱**  
  같은 문장이 반복될 경우 즉시 응답

---

## 📜 라이선스
- 번역 모델: [Meta NLLB-200 (MIT License)](https://github.com/facebookresearch/fairseq/tree/nllb)
- 코드: MIT License
