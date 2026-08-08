# website

Personal website — static HTML hosted on GitHub Pages (`cv.han.anthony`).

Layout follows the academic-homepage format of <https://yy-ko.github.io/>:
a sticky left profile sidebar plus a single content column with sections.

## Structure

```
index.html                  # 모든 내용은 여기서 수정
assets/css/style.css        # 스타일
assets/images/profile.svg   # 프로필 사진 자리 (실제 사진으로 교체)
assets/images/logos/        # 학교·회사 로고 (cau.png, ibm.svg)
assets/files/cv.pdf         # CV PDF (직접 추가)
CNAME                       # 커스텀 도메인
```

## Sections (순서)

1. **About Me** — 자기소개 문단
2. **Education** — 학교 / 학위 / 기간
3. **Experiences** — 회사·연구실 / 직함 / 기간
4. **Projects** — 프로젝트 / 설명 / 링크

## 채워 넣을 곳

[index.html](index.html) 안에 `EDIT:` 주석이 달린 부분과 placeholder 텍스트를 바꾸면 됩니다.

- 상단 `<title>` / `<meta>` / masthead 이름
- 사이드바: 이름, 한 줄 소개, 위치, Email / GitHub / LinkedIn / C.V. 링크
- 각 섹션의 항목들 — `<li>` 블록을 복사·삭제해서 개수 조절

항목 하나의 형식:

```html
<li>
  <strong class="title">기관 · 프로젝트 이름</strong>, 위치
  <span class="dot-sep">&#8226;</span> 시작 - 종료
  <ul class="inner-ul">
    <li class="inner-li"><i>직함 / 학위</i> (부가 정보)</li>
    <li class="inner-li">설명 한 줄</li>
  </ul>
</li>
```

프로필 사진은 `assets/images/` 에 넣고 `index.html` 의 `img src` 를 바꾸세요.

## 로컬에서 확인

```bash
python -m http.server 8000
# http://localhost:8000
```
