let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let num = Number(input);

for (let i = 1; i <= num; i++) {
    console.log(i);
}

// 한줄입력 띄어쓰기로 구분

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
    if (input[i] !== "") {
        numbers.push(input[i].split(" "));
    }
}

for (let i = 0; i < numbers.length; i++) {
    let num1 = Number(numbers[i][0]);
    let num2 = Number(numbers[i][1]);

    console.log(num1 + num2);
}
// 여러줄 입력 줄바꿈으로 구분

// 만약 인풋값이 숫자라면
var input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map(function (a) {
        return +a;
    });

// readline 으로 할때 시간초과 가 나오면 fs 모듈을 사용해서 한다고합니다
