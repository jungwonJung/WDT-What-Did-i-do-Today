const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map((val) => +val);
const [A, B, C] = input;

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);

// fs.readFileSync('/dev/stdin').toString().split(' ').map(val=>+val);
// map 메소드는 배열 내의 모든 각각의 요소에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다고한다
