'use strict';
// Object
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
//object = { key : value}; object는 key와 value의 집합체

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 }; //이름과 나이가 담긴 Object
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

//can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string ('' 를 써야 string type)
console.log(ellie.name); //key에 해당하는 값을 받아오고 싶은데 . 을 쓰고(일반적으로 써)
console.log(ellie['name']); // 정확하게 어떤 key가 필요한지 모를때(즉run time에서 결정될때)
ellie['hasJob'] = true; // can add properties
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');
//나중에 동적으로 value of key를 받아와야 할때 유용함

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steave', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person ('ellie', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {}; //  이게 생략된거야 
    this.name = name;
    this.age = age;
    // return this; //  이게 생략된거야 
}

// 5. operator: property existence check (key in obj)
console.log('name' in ellie);    //true
console.log('name' in ellie);    //true
console.log('random' in ellie);  // false
console.log(ellie.raodom);       // undefine
console.log(ellie.age);          //4 (value가 출력)

// 6. for...in vs for...of
// for (key in obj)
console.clear(); //log clear
for (let key in ellie) {
    console.log(key);  //key값이 정의되어 있지 않다고 나옴, key는 변수가 아닌데....
}                      // 영상은 let을 안쓰던데.... 그래서 key가 java의 고유코드인줄 알았음
// key값을 가져오고 싶을 때 사용

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let value of array ){
    console.log(value); //value를 변수로 받아들여 오류가 남, 변수가 아닌데....
}                       // 영상은 let을 안쓰던데.... 그래서 value가 java의 고유코드인줄 알았음

// 7. Fun cloning
// object.assing(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);
// assign으로 복사1
const user4 = {};
Object.assign(user4, user);
console.log(user4);
// assign으로 복사2
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //fruit2의 color가 출력되는데 이유는 assign을 쓰면 fruit2(최종)의 값이 fruit1에 덮어씌어짐
console.log(mixed.size); //big
