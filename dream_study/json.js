// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json); //["apple","banana"] 

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => { //jump라는 함수는 rabbit안에 전달 된 데이터가 아니므로 JSON으로 변환 안돼, symbol: Symbol('id')도
        console.log(`${this.name} can jump`); 
    },
};

json = JSON.stringify(rabbit);
console.log(json);//symbol도 포함 되지 않아

json = JSON.stringify(rabbit, ['name', 'color', 'size']); //내가 원하는 property만 변환 
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    //return value
    return key === 'name' ? 'ellie' : value; //세밀하게 통제하고 싶을때 callback function을 이용해서 할수 있다.
});
console.log(json);

console.log(rabbit);//stringify된거랑 비교해봐

// 2. JSON to Object 
// parse (json) 
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump -> typeError

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());


//유용한 사이트
//jsondiff.com //첫번째로 받아온 데이터와 두번째로 받아온 데이터를 비교할때
//jsonbeautifier.org //가끔 서버에서 받아온 json을 받아오면 foramat이 망가지는 경우가 있다. 이때 포맷을 이쁘게 정리해줌
//jsonparser.org // json을 objcet 형태로 보고싶다면
//https://tools.learningcontainer.com/