const fruits = ["바나나", "사과", "배", "오렌지", "귤", "수박"];
console.log(fruits[0]);
const [first, second, third, fourth] = fruits;
console.log(first, second, third, fourth);

const numbers = [1, 2, 3, 4, 5, 6];
// 배열 구조분해 할당으로 1, 2, 3 각 변수에 할당하여 출력
const [one, two, three] = numbers;
console.log(one, two, three);

const [one1, _, one3] = numbers;
console.log(one1, one3);

const student = {
  name: "홍길동",
  age: 20,
  grade: "A",
};

const { name, age, grade } = student;
console.log(name, age, grade);

const book = {
  title: "자바스크립트 최고",
  author: "홍길동",
  publisher: "한빛",
  isPublished: true,
};
const { title, author, publisher, isPublished } = book;
console.log(title, author, publisher, isPublished);

const person = {
  name: "나피엠",
};

const { name: personName, age: personAge = 25 } = person;
console.log(personName);

const printStudent = ({ name, age }) => {
  console.log(`이름 ${name}`);
  console.log(`나이 ${age}`);
};
printStudent(student);

// 문제: book 객체를 출력하는 함수를 만드세요. 인자는 객체구조분해할당으로 만들어 주세요.
const printBook = ({ title, author, publisher, isPublished, isbn = "aaa" }) => {
  console.log(title, author, publisher, isPublished, isbn);
};
printBook(book);

const students = [
  { name: "홍길동", age: 20 },
  { name: "고길동", age: 21 },
  { name: "삼길동", age: 22 },
  { name: "박길동", age: 23 },
];

const [student1, { name: secondName }, student3] = students;
console.log(student1, secondName, student3);

const user = {
  id: 1,
  profile: {
    name: "홍길동",
    address: {
      city: "서울",
      street: "강남대로",
    },
  },
};

const {
  id,
  profile: {
    name: userName,
    address: { city, street },
  },
} = user;
console.log(id, userName, city, street);
