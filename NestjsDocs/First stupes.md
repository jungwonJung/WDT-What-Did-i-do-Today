# First steps
공식문서에서는 Nest의 핵심 기본사항에 대해 알아봅니다. Nest 애플리케이션의 필수 구성요소에 익숙해지기 위해 입문수준에서 많은 부분을 다루는 기능이 포함된 기본 CRUD 애플리케이션을 빌드할 것입니다

# Language
우리는 TypeScript를 좋아하지만 무엇보다도 Node.js를 좋아합니다. 이것이 Nest가 TypeScript 및 순수 자바스크립트와 모두 호환되는 이유입니다. Nest는 최신 언어기능을 활용하므로 바닐라 자바스크립트와 함께 사용하려면 Babel 컴파일러가 필요합니다.

우리가 제공하는 예제에서는 대부분 TypeScript를 사용하지만 언제든지 코드 스니펫을 바닐라 자바스크립트 구문으로 전환할 수 있습니다(각 스니펫의 오른쪽 상단에 있는 언어 버튼을 클릭하여 전환하기만 하면 됩니다).

# Prerequisites
운영체제에 Node.js(> 10.13.0, v13을 제외)가 설치되어 있는지 확인

# Setup
Nest CLI 설치
```
$ npm i -g @nestjs/cli
$ nest new project-name
```

src
- app.controller.spec.ts
- app.controller.ts
- app.module.ts
- app.service.ts
- main.ts

controller : 하나의 라우트가 있는 컨트롤러
.spec 유닛테스트
module 모듈
service 단일 메소드를 사용하는 기본서비스
main.ts 핵심기능 NestFactory를 사용하여 Nest 애플리케이션 인스턴스를 생성하는 애플리케이션의 엔트리 파일

```
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

Nest 애플리케이션 인스턴스 생성하기위해 NestFactory 클래스 사용  
NestFactory 는 애플리케이션 인스턴스를 생성할수있는 몇가지의 정적 메소드를 제공
create() 는 INestApplication  인터페이스를 충족하는 애플리케이션 객체 반환  
Nest CLI로 스캐폴딩된 프로젝트는 개발자가 각 모듈을 자체 전용 디렉터리에 보관하는 규칙을 따르도록 권장하는 초기 프로젝트 구조를 생성  

# Platform
Nest는 플랫폼에 구애받지 않는 프레임워크를 목표합니다  
플랫폼 독립성을 통해 개발자가 여러 유형의 애플리케이션에서 활용할 수 있는 재사용 가능한 논리적 부분을 만들 수 있습니다  
기술적으로 Nest는 어댑터가 생성되면 모든 Node HTTP 프레임워크에서 작동할 수 있습니다  
 기본적으로 지원되는 HTTP 플랫폼은 express 및 fastify의 두가지

```
const app = await NestFactory.create<NestExpressApplication>(AppModule);
```

# Running the application
```
$ npm run start
```
