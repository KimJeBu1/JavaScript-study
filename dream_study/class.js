'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance(ES6전에는 class가 없었다 기존을 바탕으로 간편하게 문번만 class가 추가된것)
      //(문법상 달달한 -> 가짜의 편리한)
   
// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
    console.log(`${this.name}: hello`)
    }
}      

const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User { //User안에는 firstName, lastName, _age 3개의 fileld가 있음.
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() { //get 작성이 되면  this.age에 get이 할당되고
        return this._age;
    }
    set age(value) { //set 작성이 되면 age에 set이 할당되고
        this._age = value < 0 ? 0 : value; //-1을 0으로 바로잡아줌??
    }
}

const user1 = new User('Steve', 'Job', -1);
//나이가 -1은 말이 안됨. 사용자가 실수로 잘못 입력했다 할지라도 이를 바로 잡아줄수 있게하는게 getter& setters
console.log(user1.age);

// 3. field (public, private)
// Too soon! (적용된지 얼마안되서 쓰기 이름)
//http
class Experiment {
    publicField = 2;
    #privateField = 0; //class내부에서만 값이 보여지고 접근가능하고 변경가능
}
const experiment = new Experiment();
console.log(experiment.publicField); //2
console.log(experiment.privateField); //undefiend

// 4. Static properties and methods
// Too soon! (적용된지 얼마안되서 쓰기 이름)
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articlenumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
} 

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extned another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return this.width * this.height;
           }
}

class Rectangle extends Shape {} //Rectangle이라는 class를 만들었고 extends(keyword)를 사용해 shape를 가져올수 있음
class Triangle extends Shape {
    draw() {
        super.draw(); //super를 붙이면 shape class의 draw에 Triangle의 draw도 같이 출력가능
        console.log('Im Triangle');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }    
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle);  //false
console.log(triangle instanceof Triangle);   //true
console.log(triangle instanceof Shape);      //true 
console.log(triangle instanceof Object);     //true

