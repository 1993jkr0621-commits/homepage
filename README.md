# 데이터 사이언티스트 포트폴리오 웹 사이트 (예시)

이 저장소는 데이터 사이언티스트 포트폴리오 웹 사이트의 예시 구현입니다.

## 프로젝트 구조

- `index.html` : 메인 페이지
- `resume.html` : 간단한 이력서 페이지
- `assets/css/style.css` : 스타일
- `assets/js/main.js` : 프로젝트 로딩 스크립트
- `assets/images/*` : 프로젝트 썸네일 이미지를 포함 (SVG)
- `projects.json` : 프로젝트 메타데이터

## 로컬에서 확인하기

간단한 웹서버로 확인 가능합니다:

```bash
# Python 3
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

또는 `http-server` 같은 툴을 사용해도 됩니다.

## 배포

GitHub Pages를 사용해 간단히 배포할 수 있습니다:
- GitHub 저장소 설정 -> Pages -> 브랜치 선택 (예: `main`) 후 `/(root)` 배포

## 커스터마이즈 가이드

- `projects.json`에 프로젝트를 추가하면 자동으로 메인 페이지에 표시됩니다.
- `index.html`과 `style.css`를 편집하여 디자인과 레이아웃을 커스터마이즈하세요.
- Contact 폼은 기본적으로 `mailto:` 링크로 구성되어 있으나, 원하시면 서버리스 함수(예: Netlify Functions)나 서버 백엔드로 확장해 드립니다.

---

원하시면 다음 작업을 진행하겠습니다:

1. 이 포트를 React 기반 SPA로 전환
2. TailwindCSS 적용
3. Contact 폼에 백엔드/서버리스 연결
4. 개별 프로젝트 상세 페이지 추가 (MDX/Markdown 또는 React 라우터)

원하시는 항목을 알려주세요.
