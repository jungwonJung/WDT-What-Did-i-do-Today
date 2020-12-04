"use strict";

// Promise is a JavaScript object for asynchronous operation.
// 비동기 방식 중에 하나 callback 의 좋은 대체재
// State: pending -> fulfilled or rejected
// 가장중요한 포인트 1
// 상태 대기상태인지 성공한상태인지 실패했는지
// operation 대기 상태 pending , 성공적으로 다 끝내면 fulfilled, 실패하면 rejected

// 2
// Producer vs Consumer  데이터를 제공하는 사람과 소비하는사람

// 1. Producer
// when new Promise is created, the executor runs automatically.
// 새로운 프로미스가 만들어질때는 executor 바로 실행이 된다 라는걸 기억하고 코드를 작성해야함
// 프로미스는 Class 이기 때문에 new 라는 명령어를 사용해서 object 를 만들수있음
// 프로미스의 생성자를 보면 executor 라는 콜백함수를 전달해야함 , 또 다른 두가지의 콜백함수를 받아옴 resolve, reject 두가지를 받아옴
const promise = new Promise((resolve, reject) => {
    // 네트워크를 통해 data를 받아오거나 file 에서 뭔가 큰 정보를 받아올때 사용한다 무거운작업
    // 동기방식으로 하면 받아오는시간동안 다른작업을 못하기때문에
    // Promise 를 선언하는순간 콜백함수를 전달
    // 네트워크에서 data 를 가져오는 코드를 작성하면 선언하는그순간 바로수행
    console.log("doing something...");
    setTimeout(() => {
        resolve("ellie");
        // reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally(최신추가) 를 사용해서 값을 가져오는것
promise
    .then((value) => {
        // promise 가 잘동작했으면 value 라는값을  value = promise.resolve 의 값
        console.log(value); // 내가 지정한 동작을 통해 받아올거야
    })
    .catch((error) => {
        // promise 가 실패하면 error 라는 값을  error = promise.reject
        console.log(error); // 내가지정한동작을통해 받아오기
    })
    .finally(() => {
        // 성공 실패여부 상관없이 가장마지막에 동작 error, then 이후에도 finally 가 동작
        console.log("finally"); // 특정 기능을 마지막에 쓰고싶을때
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then((num) => num * 2) //fetchNumber 잘 동작했으면 그 숫자를 2배 곱하고
    .then((num) => num * 3) // 51번 코드가 잘 동작해서 나온 그숫자에 3을 곱한다
    .then((num) => {
        // 52번 코드가 동작해서 나온 숫자를
        return new Promise((resolve, reject) => {
            // then 에선 다시 promise (비동기코드) 를 사용해서 값을 받아올수있음
            setTimeout(() => resolve(num - 1), 1000); // 소요시간은 총 2초여야함
        });
    })
    .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("🐓"), 1000);
    });
const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen() // 닭을 받아오고
    .then(getEgg) // 받아온 닭을 통해 egg 를 받아오고
    // .catch((error) => { 계란을 받다가 에러가 생기면 빵을 리턴
    //     return "🍞";
    // })
    .then(cook) // egg 를 받아오면 후라이를 받아오고 ( 빵을 받아와서 후라이로)
    .then(console.log) // 후라이를 받아오면 그걸 출력
    .catch(console.log);
