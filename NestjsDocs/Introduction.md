# Introduction
Nest 는 효율적이고 확장 가능한 **Node.js** 서버측 애플리케이션을 구축하기위한 프레임워크  
프로그레시브 **JS** 를 사용하고 **TS** 로 완벽하게지원 및 빌드  
(순수자바스크립트로도 코딩 가능)  
**OOP**, **FP** , **FRP** 요소를 결합한다  

내부적으로 Nest 는 **Express** 와 같은 강력한 HTTP 서버 프레임워크를 사용하며 선택적으로 **Fastify** 를 사용할수있도록한다  

Nest 는 Node.js 프레임워크 위에 추상화 수준을 제공하지만  **API** 를 개발자에게 직접 노출한다  
이를 통해 개발자는 기본플랫폼에서 사용할수 있는 많은 **모듈** 을 자유롭게 사용가능  

# Philosophy  
몇년동안 Node.js 덕분에 JS 는 프론트 및 백엔드 에서 모두를 위한 웹의 **링구아 프랑카** 가 되었습니다  
이로인해 **Angular**, **React**, **Vue** 와 같은 멋진 프로젝트가 생겨서 개발자 생산성이 향상되었고 
빠르고 테스트 가능하며 확장 가능한 프론트엔드 애플리케이션도 만들수있었습니다    

Node 를 위한 많은 라이브러리, 헬퍼가 존재하지만 아키텍처적인 면에서의 주요문제를 해결하는것은 없었습니다

Nest 는 개발자와 팀이 고도로 테스트 가능하고 확장이 손쉬우면 유지관리가 쉬운 애플리케이션을 만들수있는 즉시 사용가능한  
애플리케이션 아키텍처를 제공합니다  
아키텍처는 Angular 에서 영감을 받았습니다  

# Installation  
Nest CLI 를 통해 프로젝트를 시작할수있습니다
```
$ npm i -g @nestjs/cli
$ nest new project-name
```

# Alternatives
Git 으로 시작하는 방법은
```
$ git clone https://github.com/nestjs/typescript-starter.git project
$ cd project
$ npm install
$ npm run start
```
브라우저를 열고 http://localhost:3000/로 이동합니다.
시작 프로젝트의 자바스크립트 버전을 설치하려면 위의 명령어 시퀀스에서 javascript-starter.git을 사용하세요.
npm(또는 yarn)으로 코어 및 지원파일을 설치하여 처음부터 새 프로젝트를 수동으로 만들 수도 있습니다. 물론 이 경우에는 프로젝트 상용구 파일을 직접 생성해야합니다

