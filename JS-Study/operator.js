// 1. string concatation (문자열 순차결합)
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals : 1 + 2 = ${1 + 2}`);

// console.log('jungwon's book)
// error
console.log("jungwon's book");
// jungwon'sbook
console.log("jungwon's \nbook");
// jungwon's book
console.log("jungwon's \n\tbook");
// jungwon's
// book

// 2.numeric operators (사칙연산)
console.log(1 + 1); // 더하기
console.log(1 - 1); // 빼기
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱하기
console.log(5 % 2); // 나누고 나머지값
console.log(2 ** 3); // 2의 3승

// 3.Increament and decrement operators 증가 감소 연산자
let counter = 2;
const preIncrement = ++counter;
// 이말인즉슨 2인 카운터에 + 1 을 더한값을 preIncrement 가 된다
// counter = counter 는2 인데 + 여기에 1 을 더한다
// preIncrement도 3 = counter는 3
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);
// postIncrement도 3 = counter는 현재 3 인데 ++ 가 붙은거는 + 1을 한다는뜻
// counter 는 4 = counter는 3 인데 + 1 을 더하면

// 4. assignment operators 두개를할당할수있는 연산자
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y

// 5. comparison operators 비교 연산자
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6. logical operators 논리 연산자  || or , && and , ! not
a = 1 < 2;
b = 2 < 1;
const or = a || b || c; // 인경우 하나라도 true인결과가 있으면 or = true
// 맨처음 a가 true이면 더이상 연산을 하지않고 or 가 true 라고 반환합니다

const and = a && b; // 모든결과가 true 여야만 and = true
// 맨처음 a 가 false 이면 더이상 연산을 하지않고 and 가 false 라고 값을 반환

// ! not
// true 를 false 로
console.log(!a); // a 는 true 니깐 false 로 바꿈

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// ==
console.log(stringFive == numberFive); // 문자열이지만 안에들어간게 숫자와 같으면 같다고함
console.log(stringFive != numberFive);

// ===
console.log(stringFive === numberFive); // 타입도 동일해야함
console.log(stringFive !== numberFive);

// 객체 ==
const jung1 = { name: "jungwon" };
const jung2 = { name: "jungwon" };
const jung3 = jung1;
console.log(jung1 == jung2); // 값은 같지만 저장된 reference 가 다르기때문에 false refernce.name 이라생각하면됨
console.log(jung1 === jung2); // 타입 같은 유무와는 달리 ref 가 다르기때문에 그냥 다름
console.log(jung1 === jung3); // 같은 ref 를 표시

// 객체 문제
console.log("question", 0 == false); // 3강에서 0, null, empty ,undefined 는 다 false
console.log("question", 0 === false); // 0 != boolean
console.log("question", "" == false);
console.log("question", "" === false); // '' != boolan
console.log("question", null == undefined); // 값이 없기땜에 같음
console.log("question", null === undefined); // 값이 진짜 없는건 null 못찾는건 undefined 그래서 타입은다름

//8. Conditional operators: if 문
const name = "df";
if (name === "jung") {
    console.log("hi");
} else if (name === "won") {
    console.log("hello");
} else {
    console.log("unkwnon");
}

// name = df 인데
// 만약 name 이 jung 이면 hi 를 출력하고
// 만약에 name 이 won 이면 hello 를 출력하고
// 둘다 아니면 unkwnon 을출력해라

//9.Ternary Operator : ?
console.log(name === "jung" ? "yes" : "no");
// name 이 jung 이니? true 면 왼쪽의 yes , false 면 오른쪽의 no 를 출력

//10.Switch statement
const car = "hyndai";
switch (car) {
    case "hyndai":
        console.log("hi");
        break;
    case "kia":
    case "benz":
        console.log("hello");
        break;
    default:
        console.log("no car");
        break;
}

//11. 반복문
let i = 3;
while (i > 0) {
    // 선언한 조건이 false 가 될때까지 동작
    console.log(`while : ${i}`);
    i--; // 동작
}
// 조건문이 맞을때만 동작을실행

//
do {
    console.log(`do while : ${i}`);
    i--;
} while (i > 0);
//블록을 먼저실행하고싶은경우

// 컨디션 반복문
for (i = 3; i > 0; i--) {
    console.log(`for : ${i}`);
}
// 3이라고 출력한뒤 컨디션과 스텝만 무한반복
// 컨디션 조건에 안맞으면 실행취소

for (let i = 3; i > 0; i = i - 2) {
    console.log(`inline variable for: ${i}`);
}
//

// nested loops

// 문제 2개
// 10 까지 짝수만

// 8까지만
