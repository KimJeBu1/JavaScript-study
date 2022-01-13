// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals:
''''

1+2 = ${1 + 2}`);

console.log('ellie\'s book'); //백슬러싀(\원화 키) 입력하면 ellie' 로 제대로 출력
console.log("ellie's \nbook");// \n 뒤에 오는 문자 세로로 줄바꿈
console.log("ellie's \tbook");// \t 탭키???

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation (제곱)

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`) //preIncrement: 3, counter: 3
const postIncrement = counter++;
//postIncrement = conter;
//counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`) //preIncrement: 3, counter: 4
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); //preDecrement: 3, counter: 3
const postDecrement = counter--;
console.log(`preDecrement: ${postDecrement}, counter: ${counter}`); //preDecrement: 3, counter: 2
// + or - 가 앞에 있으면 바로 업데이트되서 할당이 되고 뒤에 있으면 할당을 하고 업데이트

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value 
console.log(`or: ${value1 || value2 || check()}`);
// 코딩할때 연산이 많거나 hevy 한 코드비교는 맨뒤에 두고 심플한 value 값을 앞에 두어 비교한다.

// && (and), finds the first first falsy value
console.log(`and: ${value1 && value2 && check()}`);

//often used to compress long if-statement
//nullableObject && nullableObject.something (null 체크할때도 많이 쓰여)
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('놀람...');
    }
    return true;
}

// ! (not) 값을 반대로 바꿔줌
console.log(!value1); //false로 선언된 value1을 true로 변경

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (type 신경안씀)
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// === loose equality, with type conversion (type 신경씀)
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true 

// object equality by Reference (object는 저장될때 reference로 저장)
const ellie1 = {name: 'ellie' };
const ellie2 = {name: 'ellie' };
const ellie3 = ellie1; // same reference
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

//equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false


// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
}else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
    }


    // 9. Ternary operator; ?
    // condition ? value1 : value2;
    console.log(name === 'ellie' ? 'yes' : 'no');
    // name = ellie가 맞으면 yes 아니면 no 출력

    // 10. Switch statement
    // use for multiple if checks
    // use for enum-like value check
    // use for multiple type check in TS
    const browser = 'IE';
    switch (browser) {
        case 'IE':
            console.log('go away!');
            break;
        case 'Chrome':
        case 'Firefox':
            console.log('love you!'); // 결과가 같은 값이라면 chrome과 Firefox를 따로 break할거 없이 사용
            break;      
         default:
            console.log('same all!');
            break;
    }

//11. Loops
//while loop, while the condition is truthy,
//body code is excuted.
    let i = 3;
    while (i > 0) { // 조건문이 맞을 때만 block{}을 실행하고 싶다면 while 선택
        console.log(`while: ${i}`);
        i--;
    }

//  do while loop, body code is executed first,
// then check the condition.
do{ //block{}을 먼저 실행하고 싶다면 do while 선택
    console.log(`do thile: ${i}`);
    i--;
}  while (i > 0);

// for loop, for(begin; condition; step) 
for ( i = 3; i > 0; i--) { //i=3은 한번만 호출
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

//break, continue
//Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (let i =0; i < 11; i++) {
    if (i % 2 !== 0){
        continue; //홀수가 나오면 건너뛰고 계속 10까지 진행
    }
    console.log(`q1. ${i}`);
 }

 //continue 쓰지 않고 더 단순히 짝수만 출력
 for (let i =0; i < 11; i++) {
    if (i % 2 === 0){
        console.log(`q1. ${i}`);
    }
}
    
//Q2. iterate for 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8){
        break;
    }
    console.log(`q2. ${i}`);
}

