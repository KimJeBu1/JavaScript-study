// Function
// - fundamental building block in the program
// - subprogram can be used multiple times(서브 프로그램이라 불리며 여러변 재사용 가능)
// - performs a task or calculates a value

// 1. Function declaration 
// function name(param1, param2) {body... return;}
// one function === one thing(하나의 함수는 한가지의 일만 하도록 만들어야함)
// naming: doSomethong, command, verb(동사) (다음과 같은 형태로 함수 이름 만듬)
// e.g. createCardAndPoint -> createdCard, createPoint
// ( 함수 이름을 만드는 것이 어렵다면 함수안에 여러가지가 너무 많이 들어간건 아닌지 다시보고 나눠서 함수 만든다)_
// function is object in JS
// (function은 object이므로 변수에 할당, parameter에 전달, 함수 리턴 가능)

function printHello() {
    console.log('hello');
}
printHello(); //function call

function log(message) {
    console.log(message);
}
log('hello@'); //parmeter call
log(1234);
// *참고로 Java는 타입에 대한 정의가 없어 ex) 1 =number, arc=string etc...
//  그래서 대규모 프로젝트를 협업할때 어려움을 겪을수 잇어서 TyoeScript를 쓴다.

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder'; //전달된 object의 이름을 무조건 coder로 전달
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie); //{name: 'coder'}

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknow' ) { //from을 parameter에서 바로 지정가능
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); //Hi! by undefined (form이 정의되어 있지 않았을때)

// 4. Rest parameters (add in ES6)
function printAll(...args) { //...을 추가하면 배열 헝태로 전달
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    //for (const arg of args) { //args에 값들이 arg에 차례차례 지정. 위의 코드와 같음
    //   console.log(arg);
    //} 
    }
}
printAll('dream', 'coding', 'ellie'); 

// 5. Local scope (밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.)
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error(밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다의 예시)
}
printMessage();
 
// 6. Return a value
function sum(a,b) {
    return a+ b;
}
const result = sum(1,2); //3 
console.log(`sum: ${sum(1,2)}`);
// 모든 함수는 return undefine이거나 지정 가능 

// 7. Early return, early exit
// bad coding
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}

// good coding
function upgradeUser(user) {
    if (user.point <= 10) {
        return; //조건이 맞이 않을때는 빨리 return 하는것이 가독성 좋음
    }
    //long upgrade logic...
}

// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be return by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.(할당된 다음부터 호출가능)
const print = function () { //function을 선언한것과 동시에 print에 할당
    //function에 이름이 없는 것을 anonymous function이라 부름
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function usiong function expression (함수를 전달해서 상황이 맞으면 전달된 함수를 부르는것 )
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
//anonymous function
const printYes = function () {
    console.log('yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions(험수안에서 자신의 함수를 부르는것, 무한반복.....)
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function 
// always anonymous(이름이 없는 function은  arrow fun 사용)

// ex)const simplePrint = function () {
//     console.log('simplePrint!');
// };
const simplePrint = () => console.log('simplePrint!');// {} 없고 return 따로 없고 간단
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;//return도 사용 가능
};

//IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time
// function calculate(command, a, b)
//command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'subsrtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 're,ainder':
            return a% b;
        default:
            throw Error('unkonwn command')        ;
    }
}
console.log(calculate('add', 2 ,3))
;