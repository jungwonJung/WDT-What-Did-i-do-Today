const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const num1 = Number(input[0]);

if (num1 <= 90) {
    console.log(A);
} else if (num1 <= 80) {
    console.log(B);
} else if (num1 <= 70) {
    console.log(C);
} else if (num1 <= 60) {
    console.log(D);
} else {
    console.log(F);
}

// fs 로 해서 그런지 런타임에러가 계속발생 ㅡㅡ

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    const score = Number(line);

    if (score <= 90) {
        console.log(A);
    } else if (score <= 80) {
        console.log(B);
    } else if (score <= 70) {
        console.log(C);
    } else if (score <= 60) {
        console.log(D);
    } else {
        console.log(F);
    }
}).on("close", function () {
    process.exit();
});

// node 로 하면 다 에러가나는거같다

// 급한데로 python 으로 제출
// score = int(input())
// if score >= 90:
//     print('A')
// elif score >= 80:
//     print('B')
// elif score >= 70:
//     print('C')
// elif score >= 60:
//     print('D')
// else:
//     print('F')
