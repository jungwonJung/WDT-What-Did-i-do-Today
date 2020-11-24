"use strict";

let name = "jungwon";
console.log(name);
name = "james";
console.log(name);

// 2.variable, rw(read and write)  메모리의 값을 읽고 쓰기 가능 
// let ES6 에서 추가된 문법
let globalName = "global name";
{
    let name = "jungwon";
    console.log(name);
    name = "james";
    console.log(name);
    console.log(globalName); // 블록밖에서 선언한 변수는 출력안됨
}
console.log(name); // 블록안에서 선언한 변수는 출력이 안된다
console.log(globalName);

// 3. constant (read only) 메모리의 값을 읽기만가능 
// 변하지않는 데이터 타입을 선언할때 사용
// 장점에 대해 조사
const notChangeData = 7;
const maxNumber = 10;
console.log(notChangeData);
console.log(maxNumber);

notChangeData = 1;
maxNumber = 5;
console.log(notChangeData);
console.log(maxNumber);

// number type
const count = 10; // 정수
const size = 10.1; // 소수점
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

const infinity = 1 / 0; // 무한한값이 나올경우
const negativeInfinity = -1 / 0; // 음수인 무한한값
const nAn = "not a number" / 2; // 숫자가아닌 타입을 나눌경우
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string type
const char = "c";
const jungwon = "jungwon";
const sayHi = "hi" + jungwon;
console.log(`value : ${sayHi}, type : ${typeof sayHi}`);
const sayHello = `hello ${jungwon}`;
console.log(`value : ${sayHello}, type : ${typeof sayHello}`);

// Symbol
{
    const symbol1 = Symbol("id");
    const symbol2 = Symbol("id");
    console.log(symbol1 === symbol2);
}

const symbol1 = Symbol.for("id");
const symbol2 = Symbol.for("id");
console.log(symbol1 === symbol2);
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);

// 다이나믹 타이핑 타입스크립트를 사용하게된 계기랄까
let text = "hello";
console.log(text.charAt(0)); // h 인덱스의 순서는 항상 0 부터 스트링이니깐 가장앞에꺼
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = "7" + 5; // 스트링에 5를 더한다는걸 인지 그냥 스트링 + 스트링으로 바꾸버림
console.log(`value : ${text}, type : ${typeof text}`);
text = "8" / "2"; // 스트링 8에 스트링 2를 나눈다고? 아마 그럼 숫자를 나누겟지 하고 number타입으로 바꿔버림
console.log(`value : ${text}, type : ${typeof text}`);
// console.log(text.charAt(0)) // 중간에 number 타입으로 바뀌엇기에 인덱스 순서를 메길수없음

// 오브젝트
const jungjungwon = { name: "jungwon", age: 29 };
console.log(jungjungwon);
jungjungwon.age = 30;
console.log(jungjungwon);


// immutable data types : primitive types, frozen objects
// mutable data types : 3부에 정리함 모든 객체