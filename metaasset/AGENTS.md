# 메타자산운용(주) — 홈페이지 프로젝트 명세

> **프로젝트 목표**: metheus.co.kr 디자인을 차용하여 메타자산운용(주) 기업 홈페이지를 구축한다.

---

## 1. 프로젝트 개요

### 1.1 회사 정보
- **회사명**: 메타자산운용 주식회사 (Meta Asset Management Co., Ltd.)
- **업종**: 자산운용사 (금융투자업)
- **핵심 키워드**: 신뢰, 전문성, 안정적 자산운용, 투자자 수익실현

### 1.2 레퍼런스 사이트
- **URL**: https://metheus.co.kr (메테우스자산운용㈜)
- **차용 범위**: 전체 레이아웃, 인터랙션 패턴, 시각적 스타일
- **변경 사항**: 회사명, 로고, 콘텐츠(텍스트/이미지), 색상 팔레트 커스터마이징

---

## 2. 디자인 명세

### 2.1 디자인 스타일
- **톤**: 프리미엄 기업형 미니멀리즘
- **분위기**: 신뢰감, 전문성, 세련됨, 고급스러움
- **패턴**: 기하학적 요소 (삼각형, 대각선) 활용, 넓은 여백, 스크롤 기반 인터랙션

### 2.2 색상 팔레트

| 역할 | 색상 | 코드 |
|---|---|---|
| Primary Dark | 딥 네이비/블랙 | `#0A0F1C` |
| Primary Light | 화이트 | `#FFFFFF` |
| Accent Gold | 골드/브론즈 | `#C9A96E` |
| Accent Blue | 딥 블루 | `#1A3A5C` |
| Text Primary | 오프 화이트 | `#F0F0F0` |
| Text Secondary | 라이트 그레이 | `#A0A0A0` |
| Background Dark | 다크 차콜 | `#111111` |
| Background Section | 네이비 블랙 | `#0D1117` |

### 2.3 타이포그래피
- **한국어 본문**: Pretendard (웹폰트)
- **영문 타이틀**: Montserrat 또는 Outfit (Google Fonts)
- **수치/카운터**: Montserrat (tabular-nums)
- **폰트 크기 시스템**: rem 기반 (16px = 1rem)

| 용도 | 크기 | 굵기 |
|---|---|---|
| Hero Title | 3rem ~ 4rem | 700 |
| Section Title | 2rem ~ 2.5rem | 600 |
| Sub Title | 1.25rem ~ 1.5rem | 500 |
| Body | 1rem | 400 |
| Caption | 0.875rem | 400 |

### 2.4 인터랙션 & 애니메이션
- **Fullpage Scroll**: 섹션 단위 스크롤 스냅 (fullPage.js 또는 CSS scroll-snap)
- **Scroll Reveal**: 스크롤 시 fade-in + slide-up 트랜지션 (Intersection Observer)
- **카운터 애니메이션**: AUM 등 수치 카운팅 애니메이션
- **호버 효과**: 버튼, 카드, 네비게이션 아이템에 부드러운 트랜지션
- **페이지 전환**: 부드러운 라우트 전환 효과

---

## 3. 사이트 구조 (IA)

```
메타자산운용(주)
├── 홈 (/)
│   ├── 히어로 섹션 (풀스크린 비디오/이미지 + 캐치프레이즈)
│   ├── 회사 소개 요약
│   ├── 핵심 역량 (Core Competency)
│   ├── 운용 현황 (AUM 카운터 애니메이션)
│   ├── 최신 소식 / 공지사항
│   └── 푸터
│
├── 회사소개 (/about)
│   ├── CEO 인사말 (/about/ceo)
│   ├── 회사 개요 (/about/overview)
│   ├── 연혁 (/about/history)
│   └── 조직도 (/about/organization)
│
├── 비즈니스 (/business)
│   ├── 사업 소개 (/business/intro)
│   └── 투자 전략 (/business/strategy)
│
├── 운용현황 (/assets)
│   ├── 운용 실적 (/assets/performance)
│   └── 펀드 현황 (/assets/funds)
│
├── 알림마당 (/notice)
│   ├── 공지사항 (/notice/announce)
│   ├── 뉴스 (/notice/news)
│   └── 공시정보 (/notice/disclosure)
│
└── 인재채용 (/recruit)
    └── 채용 공고 (/recruit/jobs)
```

---

## 4. 페이지별 레이아웃 명세

### 4.1 공통 레이아웃

#### Header
- 투명 배경, 스크롤 시 고정 (sticky)
- 좌측: 회사 로고 ("META ASSET" 또는 한글 로고)
- 우측: 햄버거 메뉴 + "MENU" 텍스트
- 전체화면 오버레이 네비게이션 (클릭 시)

#### Footer
- 다크 배경
- 회사 기본 정보 (주소, 전화, 팩스, 이메일)
- 법적 고지사항
- Copyright
- SNS 링크 (선택)

#### 서브페이지 레이아웃
- 히어로 영역: 배경 이미지 + 페이지 타이틀 (영문 대문자)
- 서브 내비게이션: 2~4개 탭 버튼 (카테고리 내 이동)
- 콘텐츠 영역: 다크 배경 + 화이트 텍스트, 스크롤 애니메이션

### 4.2 홈페이지 (/)

| 섹션 | 내용 | 스타일 |
|---|---|---|
| Hero | 풀스크린 비디오/이미지 배경 + 중앙 캐치프레이즈 + "scroll down" | 풀스크린, 오버레이 |
| About | 회사 비전 요약 + 대표 이미지 | 밝은 배경 or 이미지 리빌 |
| Core Competency | 핵심 역량 3~4개 카드 | 다크/액센트 배경 |
| AUM | 운용자산 규모 카운터 애니메이션 | 스포트라이트 효과, 다크 |
| Notice | 최신 공지/뉴스 리스트 (3~5개) | 카드 리스트 |
| Footer | 회사 정보 | 다크 배경 |

---

## 5. 기술 스택

### 5.1 프레임워크
- **프론트엔드**: Next.js 14+ (App Router)
- **언어**: TypeScript (strict mode)
- **스타일링**: Vanilla CSS (CSS Variables, CSS Modules)
- **패키지 매니저**: npm

### 5.2 주요 라이브러리
- **Scroll Animation**: Intersection Observer API (네이티브)
- **Fullpage Scroll**: CSS scroll-snap (라이브러리 최소화)
- **카운터 애니메이션**: 자체 구현 (requestAnimationFrame)
- **폰트**: Google Fonts (Pretendard, Montserrat)
- **이미지 최적화**: Next.js Image 컴포넌트

### 5.3 프로젝트 구조

```
metaasset/
├── public/
│   ├── images/          # 정적 이미지 (히어로, 배경 등)
│   ├── videos/          # 히어로 비디오
│   └── fonts/           # 로컬 폰트 (필요시)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx        # 루트 레이아웃 (Header + Footer)
│   │   ├── page.tsx          # 홈페이지
│   │   ├── globals.css       # 글로벌 스타일 + 디자인 토큰
│   │   │
│   │   ├── about/
│   │   │   ├── ceo/page.tsx
│   │   │   ├── overview/page.tsx
│   │   │   ├── history/page.tsx
│   │   │   └── organization/page.tsx
│   │   │
│   │   ├── business/
│   │   │   ├── intro/page.tsx
│   │   │   └── strategy/page.tsx
│   │   │
│   │   ├── assets/
│   │   │   ├── performance/page.tsx
│   │   │   └── funds/page.tsx
│   │   │
│   │   ├── notice/
│   │   │   ├── announce/page.tsx
│   │   │   ├── news/page.tsx
│   │   │   └── disclosure/page.tsx
│   │   │
│   │   └── recruit/
│   │       └── jobs/page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.module.css
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.module.css
│   │   │   ├── FullscreenMenu.tsx
│   │   │   └── FullscreenMenu.module.css
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── CoreCompetency.tsx
│   │   │   ├── AumCounter.tsx
│   │   │   └── NoticeSection.tsx
│   │   │
│   │   ├── common/
│   │   │   ├── SubpageHero.tsx
│   │   │   ├── SubNavigation.tsx
│   │   │   ├── ScrollReveal.tsx
│   │   │   └── AnimatedCounter.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── Card.tsx
│   │
│   ├── hooks/
│   │   ├── useScrollReveal.ts
│   │   ├── useCounter.ts
│   │   └── useIntersectionObserver.ts
│   │
│   ├── styles/
│   │   └── tokens.css         # CSS 변수 토큰 (별도 관리 시)
│   │
│   └── lib/
│       └── constants.ts       # 회사 정보, 메뉴 데이터 등
│
├── AGENTS.md
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 6. 코딩 컨벤션

### 6.1 파일 작성 규칙
- **컴포넌트**: PascalCase (`HeroSection.tsx`)
- **스타일**: 컴포넌트와 동일 이름 (`HeroSection.module.css`)
- **훅**: camelCase, `use` 접두어 (`useScrollReveal.ts`)
- **상수/유틸**: camelCase (`constants.ts`)
- **폴더**: kebab-case 또는 camelCase (Next.js 라우트는 kebab-case)

### 6.2 코드 스타일
- 함수형 컴포넌트만 사용 (class component 금지)
- TypeScript strict mode 필수
- `any`, `@ts-ignore`, `@ts-expect-error` 사용 금지
- 빈 catch 블록 금지
- console.log 등 디버깅 코드 금지 (최종 코드)
- 한 파일에 한 컴포넌트
- Props 인터페이스는 컴포넌트 파일 상단에 정의

### 6.3 CSS 규칙
- CSS Modules 사용 (`.module.css`)
- CSS Variables로 디자인 토큰 관리
- 모바일 퍼스트 반응형 (min-width 미디어 쿼리)
- `!important` 사용 지양
- BEM 네이밍 불필요 (CSS Modules 스코핑)

### 6.4 Git 커밋 규칙
- Conventional Commits: `feat:`, `fix:`, `style:`, `docs:`, `refactor:`
- 커밋 메시지: 영문
- 명시적 요청 없이 커밋/푸시 금지

---

## 7. SEO & 메타 정보

### 7.1 기본 메타 태그
```html
<title>메타자산운용(주) | Meta Asset Management</title>
<meta name="description" content="메타자산운용(주)는 전문적인 자산운용과 투자자의 안정적인 수익실현을 목표로 합니다." />
<meta name="keywords" content="메타자산운용, 자산운용, 투자, 펀드, 금융" />
<meta property="og:title" content="메타자산운용(주)" />
<meta property="og:description" content="전문적인 자산운용, 안정적인 수익실현" />
<meta property="og:image" content="/images/common/og.png" />
```

### 7.2 SEO 원칙
- 페이지별 고유한 `<title>`, `<meta description>`
- 시맨틱 HTML 사용 (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- 페이지당 `<h1>` 하나
- 이미지에 적절한 `alt` 속성
- Next.js Metadata API 활용

---

## 8. 반응형 브레이크포인트

| 디바이스 | 너비 |
|---|---|
| Mobile | < 768px |
| Tablet | 768px ~ 1024px |
| Desktop | 1024px ~ 1440px |
| Wide | > 1440px |

---

## 9. 콘텐츠 가이드

### 9.1 텍스트 톤앤매너
- **공식적이면서 따뜻한** 어조
- 금융 업계 관행에 맞는 **신뢰감 있는** 문체
- 지나치게 마케팅적인 표현 지양
- 수치와 실적 중심의 객관적 서술

### 9.2 이미지 스타일
- **고급 건축물 / 도시 스카이라인**: 히어로 섹션
- **비즈니스 미팅**: 팀워크, 전문성 표현
- **추상 금융 그래프**: 비즈니스 섹션
- 색보정: 다크톤, 대비 강조, 블루/골드 틴트

---

## 10. 성능 요구사항

- **Lighthouse 점수**: Performance 90+, Accessibility 90+, SEO 90+
- **LCP**: < 2.5초
- **FID**: < 100ms
- **CLS**: < 0.1
- 이미지: WebP + Next.js Image 최적화
- 폰트: `font-display: swap`, 사전 로드
- 코드 스플리팅: Next.js 자동 + dynamic import

---

## 11. 법적 고지

페이지 하단 또는 별도 페이지에 다음 내용 포함:
- 투자 위험 고지문 (금융투자업 관련 법적 문구)
- 개인정보처리방침 링크
- 이용약관 링크

---

## Hard Constraints (절대 위반 금지)

1. TypeScript 타입 에러 무시 금지 (`any`, `@ts-ignore` 등)
2. 빈 catch 블록 금지
3. 디버깅 코드 잔류 금지 (`console.log`, TODO 등)
4. 명시적 요청 없이 git commit/push 금지
5. 읽지 않은 코드에 대해 추측 금지 — 먼저 읽을 것
6. 변경 후 빌드 검증 필수
7. 기존 패턴과 컨벤션 일치 필수
8. 접근성(a11y) 기본 사항 준수
