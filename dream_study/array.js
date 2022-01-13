'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['🍓', '🍊'];
console.log(fruits);
console.log(fruits.length); //2
console.log(fruits[0]);     //🍓
console.log(fruits[1]);     //🍊
console.log(fruits[2]);     //undefined
console.log(fruits[fruits.length - 1]); //array의 마지막 value를 출력할때

console.clear();
// 3. Looping over an array
// print all frutis
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach 
fruits.forEach((fruit, index, Array) => console.log(fruit));
//forEach는 value, index, array를 받아올수 있어, 그리고 value들 마다 전달한 함수를 출력하는구나

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍉', '🍌');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();// 🍌 remove
fruits.pop();// 🍉 remove
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍈', '🍎');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift(); //🍈remove
fruits.shift(); //🍎remove
console.log(fruits);
//note!! shift, unshift are slower than pop, push(전체의 data가 shift 되어야 하므로)
// shift, unshift 보다 push, pop 추천
 
// splice: remove an item by index position
fruits.push('🍍', '🌽', '🥑');
console.log(fruits); //['🍓', '🍊', '🍍', '🌽', '🥑']
fruits.splice(1,1); //(remove beginnging index, remove number(갯수) index )
console.log(fruits); //['🍓', '🍍', '🌽', '🥑']
fruits.splice(1, 1, '🍖', '🧀' );// splice의 세번째 인자>부터는 추가가 됨
console.log(fruits);//['🍓', '🍖', '🧀', '🌽', '🥑']

//combine two arrays
const fruits2 = ['🍩', '🍦'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); //['🍓', '🍖', '🧀', '🌽', '🥑', '🍩', '🍦']

// 5. Searching 
// indexOf; find the index
console.clear();
console.log(fruits); // ['🍓', '🍖', '🧀', '🌽', '🥑']
console.log(fruits.indexOf('🍖')); //1
console.log(fruits.indexOf('🌽')); //3
console.log(fruits.indexOf('🌰'));  //-1(if it is not present.)

// includes
console.log(fruits.includes('🍖')); //true
console.log(fruits.includes('🌰')); //false

// lastIndexof
console.clear();
fruits.push('🍓');
console.log(fruits);
console.log(fruits.indexOf('🍓')); //0(the search starts at index 0.)
console.log(fruits.lastIndexOf('🍓'));//5(the search starts at the last index in the array)

