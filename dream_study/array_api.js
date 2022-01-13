// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange']; 
  const result = fruits.join(', and ');//()안은 구분자라고 하며 응용가능
  console.log(result); //apple, and banana, and orange

}
 
 
    // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');//구분자 꼭 필요 
    console.log(result);//['🍎', ' 🥝', ' 🍌', ' 🍒']
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();//array자체를 바꿔버림 출력만 바꿔서 내보내는것이 아니라
    console.log(result);//[5, 4, 3, 2, 1]
  }
  
  // Q4. make new array without the first two elements(새로운 배열을 만들어야해)
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, array.length);//slice는 array에서 원하는 부분만 return, (2,5)이렇게 해도 돼
    console.log(result); //[3, 4, 5]
    console.log(array); //[1, 2, 3, 4, 5]
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
   const result = students.find((student) => student.score === 90);//finde는 stuents안에 있는 모든 student를 차례로 읽다가 score=90 true이면 return, 뒤에 90점 있어도 첫번째만 return 
   console.log(result);//Student {name: 'C', age: 30, enrolled: true, score: 90}
  }
  
  // Q6. make an array of enrolled students
  {
    const result = students.filter((student) => student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map((student) => student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    const result = students.some((student) => student.score < 50);//array중에 만족되는 것이 하나라도 있는지 없는지 확인할때
    console.log(result);
    const result2 = !students.every((student) => student.score >= 50);//모든 조건이 만족되어야 할때 사용
    console.log(result2);
  }
  // { // 내가 푼거
  //   const result = students.filter((student) => student.score <50);
  //   console.log(result);
  // }
  
  // Q9. compute students' average score
  {
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result/students.length);
  }
  // {
  //   const result = students.reduce((prev, curr) => { //reduce는 array 하나하나 돌면서 누적할때 쓴다
  //     console.log('------');
  //     console.log(prev);
  //     console.log(curr);
  //     return prev + curr.score;
  //   }, 0);
  //   console.log(result/students.length);
  // }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students.map((student) => student.score).join(', ');
    console.log(result);
  }
  { // 점수가 50점 이상만 보고 싶다
    const result = students
    .map((student) => student.score) 
    .filter(score => score >= 50)
    .join(', ');
    console.log(result);
  }
  // { //내가 푼거
  //   const result = students.map((student) => student.score);
  //   console.log(result);
  //   const result2 = result.join(', ');
  //   console.log(result2);
  // }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result =students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
    console.log(result);
  }
  {
    const result =students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
    console.log(result);
  }