'use strict';

// JavaScript is synchronous.
// Excute the code block in order after hoisting.
// hoistig: var, function declaration이 자동적으로 제일 위로 올라가는것
// callback function은 전달해준 함수를 나중에 불러줘
console.log('1');
setTimeout(() =>  //무조건 Browser에 API 요청 -> 비동기, Browser에 1초후 다시callback 해줘
    console.log('2'), 1000); //응답을 기다리지 않고 다음 차례로 넘어감  비동기
    //Broswer에서 1초 지났어 callback function 실행해 그럼 이때 ('2')실행
console.log('3');

// Synchronous callback (즉각적으로 동기적으로 실행)
function printImmediately(print) { //함수니까 hoisting
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callbakc (나중에 언제 실행될지 모르는 비동기식 실행)
function printWithDelay(print, timeout) { //함수니까 hoisting
    setTimeout(print, timeout); 
}
printWithDelay(() => console.log('async callback'), 2000); //비동기

//*******정리*********
//callback에도 비동기와 동기방식있다.
//Synchronous(동기)는 순차적으로 실행
//Asynchronous는 입력된 시간에 맞춰 실행

//Callback hell example 
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin'});
            } else {
                onError(new Error( 'no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter tour id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
)

// callback function 문제점
// callback안에서 무언가 다른것을 호출하고 그안에서 또다른 callback을 전달하고 그 안에서 또 다른것을 전달하고를 반복........
// 가독성이 떨어져... 읽기가 어려워 나중에 debugging가 어려워