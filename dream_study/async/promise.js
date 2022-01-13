'use strict';

// promise is a JavaScript object for asynchronius opration.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor(function) runs automatically. 
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)(헤비한거(network, read files) 비동기로 처리 )
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        //reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then((value) => { //성공하면 호출(then은 값을 바로 전달할 수도 있고 pormise(비동기)를 전달해도 됨 )
        console.log(value);
})
    .catch((error) => { //실패하면 호출
        console.log(error);
})
    .finally((error) => { //성공하든 실패하든 무조건 호출
        console.log('finally');
})

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)  //2
    .then(num => num * 3)  //6
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then( num => console.log(num)); //5

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
      setTimeout(() => resolve('🐓'), 1000);
  });
  const getEgg = hen =>
  new Promise((resolve, reject) => {
      //setTimeout(() => resolve(`${hen} =>🥚`), 1000);
      setTimeout(() => reject(new Error(`${hen} =>🥚`)), 1000);
  });
  const cook = egg =>
  new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${egg} =>🍳`), 1000);
  });

  //getHen().then(getEgg).then(cook).then(console.log);

  getHen()
  .then(getEgg)//= (hen => getEgg(hen))
  .catch(error => { //.catch가 없다면 요리 완성 못하고 error
      return '🥖';
  })
  .then(cook)  //=  (egg => cook(egg)) 
  .then(console.log) //= (meal => console.log(meal))
  .catch(console.log);



