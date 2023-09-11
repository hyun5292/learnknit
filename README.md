# <p align="center">프로젝트명</p>

<p align="center">
<img width="30%" src="https://raw.githubusercontent.com/hyun5292/learnknit/master/public/favicon.ico" alt="프로젝트명 로고">
</p>

## 기본 정보

> - 개발 기간<br/>: 2022.11.15 ~ 2022.12.24
>
> - 사이트 주소<br/>https://learnknit.netlify.app/
>
> - 사용 언어 및 개발 환경<br/><span style="fontWeight: bold;"> <img height="15px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="React 로고">
>   React 18.2.0
>   </span> <span style="fontWeight: bold;"><img height="15px" src="https://img.icons8.com/?size=2x&id=hsPbhkOH4FMe&format=png" alt="nodeJS 로고"> nodeJS 16.17.0</span> <span style="fontWeight: bold;"> <img height="15px" src="https://res.cloudinary.com/sudol5292/image/upload/v1694195999/vscode_rwngfk.png" alt="vsCode 로고" />
>   Visual Studio Code
>   </span><br/><span style="fontWeight: bold;"><img  height="15px" src="https://res.cloudinary.com/sudol5292/image/upload/v1694418400/yt_icon_rgb_n8uusn.png" alt="유튜브 로고" /> Youtube API</span>

## 프로젝트 소개

> 뜨개질을 단계별로 수강할 수 있도록 만든 온라인 강의 사이트입니다.<br/>사촌동생이 뜨개질에 관심을 가지게 되면서<br/>효율적으로 알려주기 위해 제작하게 되었습니다.<br/>그 이후로 뜨개질을 배우고자 하는 다른 지인들에게도<br/>해당 사이트를 통해 알려주고 있습니다.
>
> ### 주요 기능
>
> - 사이트 이용 방법 안내창
> - 단계별 이동 메뉴 및 이전, 다음 버튼
> - 메인 영상 및 관련 영상 시청

## 스토리보드

> ### 메인 페이지
>
> <img width="70%" src="https://res.cloudinary.com/sudol5292/image/upload/v1694419011/learnknit-storyboard/main_h7voqm.png" alt="main page storyboard">
>
> ### 관련 영상 보기
>
> <img width="70%" src="https://res.cloudinary.com/sudol5292/image/upload/v1694419011/learnknit-storyboard/morevideo_pabzup.png" alt="more video storyboard">

## 화면 구성

> ### 안내창
>
> <img width="70%" src="https://res.cloudinary.com/sudol5292/image/upload/v1694420166/learnknit-storyboard/learnknit_info_wasaoa.png" alt="안내창">
>
> ### 메뉴 없는 메인 페이지
>
> <img width="70%" src="https://res.cloudinary.com/sudol5292/image/upload/v1694420166/learnknit-storyboard/learnknit_rgyabh.png" alt="메뉴 없는 메인 페이지">
>
> ### 메뉴 있는 메인 페이지
>
> <img width="70%" src="https://res.cloudinary.com/sudol5292/image/upload/v1694420076/learnknit-storyboard/learnknit_menu_tnyyqj.png" alt="메뉴 있는 메인 페이지">
>
> ### 관련 영상 보기
>
> <img width="70%" src="https://res.cloudinary.com/sudol5292/image/upload/v1694420076/learnknit-storyboard/learnknit_morevideo_gpwlmk.png" alt="관련 영상 보기">

## Architecture

```
learnknit
├─ .git
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ public
│  ├─ assets
│  ├─ favicon.ico
│  ├─ index.html
│  └─ _redirects
├─ README.md
├─ src
│  ├─ app.jsx
│  ├─ app.module.css
│  ├─ common
│  │  ├─ colors.css
│  │  └─ sizes.css
│  ├─ components
│  │  ├─ error
│  │  │  ├─ error.jsx
│  │  │  └─ error.module.css
│  │  ├─ header
│  │  │  ├─ header.jsx
│  │  │  └─ header.module.css
│  │  ├─ info_window
│  │  │  ├─ info_window.jsx
│  │  │  └─ info_window.module.css
│  │  ├─ loading
│  │  │  ├─ loading.jsx
│  │  │  └─ loading.module.css
│  │  ├─ menu
│  │  │  ├─ menu.jsx
│  │  │  └─ menu.module.css
│  │  ├─ video_detail
│  │  │  ├─ video_detail.jsx
│  │  │  └─ video_detail.module.css
│  │  ├─ video_item
│  │  │  ├─ video_item.jsx
│  │  │  └─ video_item.module.css
│  │  └─ video_more
│  │     ├─ video_more.jsx
│  │     └─ video_more.module.css
│  ├─ db
│  │  └─ stepsData.json
│  ├─ index.js
│  ├─ index.module.css
│  └─ service
│     └─ youtube.js
└─ yarn.lock

```
