const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// \ 가 돈표시 윈도우라 역슬래시

const num1 = Number(input[0]);
const num2 = Number(input[1]);

const oneNum = num2 % 10;
const tenNum = Math.floor((num2 % 100) / 10);
const hundreNum = Math.floor(num2 / 100);
// Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
// 참고: Math.floor(null)은 NaN 대신 0을 반환합니다.

console.log(num1 * oneNum);
console.log(num1 * tenNum);
console.log(num1 * hundreNum);
console.log(num1 * num2);
