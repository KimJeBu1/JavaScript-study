// async & await
// clear style of using promise :

// 1. async
async function fetchUser() { //async는 promise를 간편히 쓸수 있다.
    // do network request in 10 sec... (가정임)
    return 'ellie'; 
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    //throw 'error';
    return '🍅';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits () {
    const applePromise = getApple(); // promise의 병렬 문제를 해결
    const bananaPromise = getBanana();//사과받는데 1초걸린후 바나나 받는데 1초걸린 필요 없이 합쳐서 1초면 나와
    const apple = await applePromise;
    const banana = await bananaPromise; //코딩이 지저분해 
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]).then(fruits =>
        fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);



