'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length); //2
console.log(fruits[0]);     //π
console.log(fruits[1]);     //π
console.log(fruits[2]);     //undefined
console.log(fruits[fruits.length - 1]); //arrayμ λ§μ§λ§ valueλ₯Ό μΆλ ₯ν λ

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
//forEachλ value, index, arrayλ₯Ό λ°μμ¬μ μμ΄, κ·Έλ¦¬κ³  valueλ€ λ§λ€ μ λ¬ν ν¨μλ₯Ό μΆλ ₯νλκ΅¬λ

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('π', 'π');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();// π remove
fruits.pop();// π remove
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('π', 'π');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift(); //πremove
fruits.shift(); //πremove
console.log(fruits);
//note!! shift, unshift are slower than pop, push(μ μ²΄μ dataκ° shift λμ΄μΌ νλ―λ‘)
// shift, unshift λ³΄λ€ push, pop μΆμ²
 
// splice: remove an item by index position
fruits.push('π', 'π½', 'π₯');
console.log(fruits); //['π', 'π', 'π', 'π½', 'π₯']
fruits.splice(1,1); //(remove beginnging index, remove number(κ°―μ) index )
console.log(fruits); //['π', 'π', 'π½', 'π₯']
fruits.splice(1, 1, 'π', 'π§' );// spliceμ μΈλ²μ§Έ μΈμ>λΆν°λ μΆκ°κ° λ¨
console.log(fruits);//['π', 'π', 'π§', 'π½', 'π₯']

//combine two arrays
const fruits2 = ['π©', 'π¦'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); //['π', 'π', 'π§', 'π½', 'π₯', 'π©', 'π¦']

// 5. Searching 
// indexOf; find the index
console.clear();
console.log(fruits); // ['π', 'π', 'π§', 'π½', 'π₯']
console.log(fruits.indexOf('π')); //1
console.log(fruits.indexOf('π½')); //3
console.log(fruits.indexOf('π°'));  //-1(if it is not present.)

// includes
console.log(fruits.includes('π')); //true
console.log(fruits.includes('π°')); //false

// lastIndexof
console.clear();
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π')); //0(the search starts at index 0.)
console.log(fruits.lastIndexOf('π'));//5(the search starts at the last index in the array)

