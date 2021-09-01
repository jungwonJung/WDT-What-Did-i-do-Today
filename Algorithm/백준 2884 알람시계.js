const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    const input = line.split(" ");

    let h = Number(input[0]);
    let h = Number(input[1]);

    if (m < 45) {
        m + 15;
        if (h === -1) {
            h = 23;
        }
    }

    console.log(h, m);

    rl.close();
}).on("close", function () {
    process.exit();
});
