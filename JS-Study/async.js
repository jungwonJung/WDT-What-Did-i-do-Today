// async & await
// clear style of using promise :)

// 동기식으로 작성하지만 비동기방식으로 코드를 실행
// promise 위에 조금더 간편한 api 를 제공하는 방식
// 원래 존재하던 기능위에 조금더 간편한 기능을 추가하는것을 syntatic sugar 라고함

// 1. async
async function fetchUser() {
    // 네트워크와 통신한다는 가정 10초후에
    // 비동기 방식을 사용하지않으면 10초후에 가져오는것이 아닌 10초동안 머무른다
    return "ellie";
}

const user = fetchUser(); // user 는 fetchUser 인데 fetchUser 를 실행시키면 10초후에 값이 리턴 동기는 그동안 기다림
user.then(console.log);
console.log(user); // 이밑으로 코드가 잇으면 데이터가 웹에 표시가 되지않음 10초 동안 텅텅

// 2. await ✨
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return "🍎";
}

async function getBanana() {
    await delay(1000);
    return "🍌";
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana(); // 병렬처리를 하기위해서 promise 는 선언한 순간 바로 실행
    const apple = await applePromise;
    const banana = await bananaPromise;
    // const apple = await getApple();  1초
    // const banana = await getBanana();  1초  2초가 걸림 비효율적
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs ✨
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then((fruits) => fruits.join(" + "));
    // all 을 선언하면 promise 안에있는 선언들이 다 동작할때까지 병렬화 ( 모아주는것 )
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
    // race 는 선언한것중에 빨리 되는것 하나만 return
}

pickOnlyOne().then(console.log);
