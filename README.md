# 🗺️ 리플 (Real Place)

> 이젠아카데미 프로젝트 - 4조 ( 2022.10.31 ~ 2023.01.30 )
  
## 본 프로젝트는
진짜서울(https://jinjja-seoul.com) 클론코딩   
유저들이 장소에 대한 후기를 남기고 이를 테마별로 지정하여 검색할 수 있는 사이트
 
## 팀원
[서보선](https://github.com/sqhtjs0104), [권채림](https://github.com/zzemoo), [유지인](https://github.com/xoxoinny0) , [장윤신](https://github.com/yun-sin)

## 사용 스킬

|Front-End|Back-End|Communication|
|:---|:---|:---|
|<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/><br/><img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></br><img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/></br><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></br><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></br><img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/>|<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/><br/><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/></br><img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>|<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/></br><img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=github&logoColor=white"/>|

 
## 사용 API, 라이브러리
> <img src="https://img.shields.io/badge/react_helmet_async-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/react_router_dom-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/react_modal-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/react_glider-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/react_loader_slider-eee?style=flat-square"/>
> <br/><br/>
> <img src="https://img.shields.io/badge/classnames-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/fortawesome-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/ckeditor4-eee?style=flat-square"/>
> <br/><br/>
> <img src="https://img.shields.io/badge/dayjs-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/axios-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/lodash-eee?style=flat-square"/>
> <br/><br/>
> <img src="https://img.shields.io/badge/express-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/nodemon-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/dotenv-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/cookie_parser-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/body_parser-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/mysql2-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/mybatis_mapper-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/express_mysql_session-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/serve_static-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/multer-eee?style=flat-square"/>
> <img src="https://img.shields.io/badge/nodethumbnail-eee?style=flat-square"/>
> <br/><br/>
> <img src="https://img.shields.io/badge/winston-eee?style=flat-square"/>


## 문제와 개선방안
- 컴포넌트 내 슬라이드 중첩 사용으로 서버 통신 횟수 증가, 사이트 속도 저하 문제   
-> 리덕스 state 자료 재편성 및 동일 기능/데이터 함수 병합

- SQL 처리 미흡   
-> SQL 반복문, 조건문 연구 및 적용, mybatis 내 구문 수정 + 테이블 구조 수정

- SEO 처리 미흡   
-> React Helmet 이용 meta 추가

- 마이페이지, 신고페이지, 데이터삭제 미구현

- 서버의 로컬 환경에서만 실행 가능(MySQL 처리 관련)   
-> Linux 서버 내 SQL 이식, SSH 키를 이용해 동작 중인 Linux 서버의 DB에 접속하도록 수정, 또한 build를 통해 생성된 리액트 배포파일 호스팅(gh-page 등)
 
## Output
![IMG](./capture/main.png)
![IMG](./capture/map.png)
![IMG](./capture/searchTheme.png)
![IMG](./capture/bulletin.png)
![IMG](./capture/post.png)