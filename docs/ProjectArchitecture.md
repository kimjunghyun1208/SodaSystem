# SodaSystem Renewal Project Architecture

## 🚀 프로젝트 개요 (Overview)
- **이름**: (주)소다시스템 웹사이트 리뉴얼 2026
- **구조**: 모노레포 (Monorepo) - 프론트엔드 및 백엔드 통합 관리
- **목표**: 5인 기반의 협업 환경 최적화 및 도메인 중심의 클린 아키텍처 구축

---

## 🏗️ 전체 구조 (System Architecture)

### 1. Frontend (`/frontend`)
가장 직관적인 기능을 분리한 **Feature-Sliced Design** 기반 구조입니다.

- **`api/`**: API 인터셉터 및 통신 공용 설정 (`interceptor.js`)
- **`core/`**: 전역 설정 및 상수 관리 (`config.js`, `constants.js`)
- **`features/`**: 팀원별 독립 작업 공간 (사업 영역별 수직 분리)
  - `water-source/`: 수자원 통합 관리
  - `gis-spatial/`: 지도 및 공간 정보 시각화
  - `iot-sensor/`: 실시간 센서 데이터 보드
  - `recruit-portal/`: 채용 관리 포털
- **`pages/`**: 실제 URL과 매칭되는 페이지 조립 (`home`, `business`)
- **`shared/`**: UI Kit 및 공용 레이아웃 (`AppHeader.jsx`, `BaseButton.jsx`)

### 2. Backend (`/backend`)
표준 **Layered Architecture**를 따른 안정적인 API 구조입니다.

- **`api/`**: 엔드포인트 라우팅 (`index.js`)
- **`controllers/`**: HTTP 요청 처리 및 서비스 전달
- **`services/`**: 핵심 비즈니스 로직 및 외부 연동 (S3, DB 등)
- **`core/`**: DB 연결 및 전역 서버 설정

---

## 🎨 협업 및 컨벤션 (Collaboration & Conventions)

### 1. 파일 명명 규칙 (Project Naming)
팀원들이 한눈에 파일의 성격을 파악하기 위해 다음 규칙을 엄격히 준수합니다.

- **PascalCase (대문자)**: 리액트 컴포넌트 및 UI 요소
  - 예: `AppHeader.jsx`, `BaseButton.jsx`, `HomeEntry.jsx`
- **camelCase (소문자)**: 순수 로직, 유틸리티, 서비스 파일
  - 예: `interceptor.js`, `validator.js`, `homeService.js`
- **kebab-case (하이픈)**: 도메인 폴더 및 에셋 폴더 명칭
  - 예: `water-source`, `gis-spatial`, `main-hero.webp`

### 2. 구동 방법 (How to Run)

- **Frontend**:
  ```bash
  cd frontend
  npm run dev (Port: 3000)
  ```
- **Backend**:
  ```bash
  cd backend
  node server.js (Port: 4000)
  ```

---

## 🛡️ 유지보수 가이드 (Maintenance)
- 새로운 화면이 필요할 때는 `pages/`에 엔트리를 먼저 만들고, 해당 화면에 필요한 기능은 `features/` 하위에서 작업을 시작합니다.
- 공통적으로 쓸 유틸리티나 훅은 반드시 `shared/`에 먼저 존재하는지 확인 후 구현하여 중복 코드를 방지합니다.

---


