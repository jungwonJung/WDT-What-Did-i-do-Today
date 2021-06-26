# Controllers
컨트롤러는 request 를 처리하고 response 를 클라이언트에 반환

컨트롤러의 목적은 어플리케이션에 대한 특정 요청을 수신
라우팅 메커니즘은 어떤 컨트롤러가 어떤 요청을 수신하는지 제어  
종종 각 컨트롤러에 둘 이상의 라우트가 있으며 다른 라우트는 각각 다른작업 수행

컨트롤러를 만들기위해선 클래스, 데코레이터 사용
데코레이터는 클래스를 필수 메타데이터와 연결  
Nest 가 라우팅 맵을 만들수있게한다

# Routing
기본 컨트롤러를 정의하는데 필수인 @Controller 데코레이터를 사용
@Controller 에서 경로접두사를 사용하면 관련 라우트를 쉽게 그룹화할수있음
반복할 필요가 없어짐

```
// cats.controller.tsJS

import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```

