'use strict';

//2. Variable, rw(read/write)
let globalName = 'global name';
{let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName); 

//var hoisting (move declaration from bottom to top)
//var(don't ever use this!)

//3. Contant-> 한번 할당하면 절대 값이 바뀌지 않아(read only)
// use const whenever possible.
// only use let if varible needs to change.

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objcet( i.e object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasos:
// - securtiry
// - thread safety
// - reduce human mistakes

//4. Variable sypes
//Primitive, single item: number, string, boolean, null, undefiedn, symbol
//object, box container
//function, first-class function

const count = 17; //integer
const size = 17.1 //decimal number
console.log(`value: ${count}, type: ${typeof count}`);//17, number
console.log(`value: ${size}, type: ${typeof size}`);//17.1, number

//number - speicla numberic values: infinity, -infinity, NaN
const infinity = 1 / 0; //상수를 0으로 나누면 무한대(infinity)
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn)

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals(string)
console.log(`vlaue: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false:0, null undefined, NaN ''
//true: any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type:${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null 넌 텅텅 비어있어라고 지정
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined 선언은 되었지만 아무것도 값이 안들어가 있는 상태
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects(고유한 식별자를 만들때 사용)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

const gSymbol1 =  Symbol.for('id');
const gSymbol2 =  Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)
//symbol은 .description을 붙여서 string으로 변환해야 함

//object, real-life object, data structure
const ellie = {name:'ellie', age:20}
//박스형태
//ellie의 나이와 이름을 지정, 지정된 object는 다른 object로 변경(할당) 불가
ellie.age = 21; // ellie의 age를 따로 지정하여 변경하여야만 바뀐다 

//Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h -> type: string
console.log(`value: ${text}, type: ${typeof text}`); //type은 string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //type은 number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value:75 type은 string
//'7'은 string이고 Java는 5를 문자열도 받아들여 type이 string이 됨
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); //value: 4, type: number
//' '안에 있는 것은 string이지만 연산자가 /이고 ''안에 있는것이 숫자이므로 type이 number가 됨
//console.log(text.charAt(0));// ERROR, 중간에 type이 바뀌었어
//이런 문제를 해결하기 위해 Type Script가 나옴