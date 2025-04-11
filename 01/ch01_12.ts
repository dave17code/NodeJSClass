interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "홍길동",
  age: 20,
};

console.log(user);

interface ColorConfig {
  color?: string;
  width?: number;
}
const redConfig: ColorConfig = {
  color: "red",
};
redConfig.width = 100;
console.log(redConfig);

interface ReadOnlyPoint {
  readonly x: number;
  readonly y: number;
}

const point: ReadOnlyPoint = {
  x: 10,
  y: 20,
};
// point.x = 30 (Cannot assign to 'x' because it is a readonly property.)

// 문제1: 학생 정보를 나타내는 인터페이스를 만들고, 이름이 "김철수"이고 학년이 3인 학생 객체를 생성하세요.
interface studentInfo {
  name: string;
  year: number;
}
let studentKim: studentInfo = {
  name: "김철수",
  year: 3,
};
// 문제2: 책 정보를 나타내는 인터페이스를 만드는데, 제목(필수), 저자는 선택적으로 포함되도록 하고, 제목이 "타입스크립트"인 책을 생성하세요.
interface bookInfo {
  title: string;
  author?: string;
}
let typeScriptBook: bookInfo = {
  title: "타입스크립트",
};
// 문제3: 생년월일을 나타내는 인터페이스를 만들고, 1998년 1월 1일을 나타내는 객체를 생성하세요 읽기전용으로
interface birthDate {
  readonly birthDate: "1998-01-01";
}

// 문제4: 사람의 기본 정보(이름, 나이)와 선택적 정보(전화번호)를 포함하는 인터페이스를 만들고, 이름이 "홍길동" 나이가 30인 사람 객체를 만들어보세요
interface Person {
  name: string;
  age: number;
  phoneNumber?: number;
}
let hong: Person = {
  name: "홍길동",
  age: 30,
};
console.log(hong);
// 문제5: 상품 정보를 나타내는 인터페이스를 만들고 상품명(필수), 가격(필수), 할인율(선택)으로 하고, "노트북", 130만원에 판매하는 객체를 생성해보세요
interface productInfo {
  productName: string;
  price: number;
  discountPercent?: number;
}
let laptop: productInfo = {
  productName: "m2 pro",
  price: 1300000,
};
console.log(laptop);

interface SearchFunc {
  (source: string, substring: string): boolean;
}
const search: SearchFunc = (source: string, substring: string): boolean => {
  return source.includes(substring);
};

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
}

class Watch implements ClockInterface {
  currentTime: Date;
  setTime(d: Date): void {
    throw new Error("Method not implemented.");
  }
}
const clock = new Clock();
console.log(clock.currentTime);

type PointType = {
  x: number;
  y: number;
};

const point1: PointType = {
  x: 100,
  y: 200,
};
console.log(point1);
// 유니온 타입
type gender = "남" | "여";
let myGender: gender = "남";
// 기본 타입
type name = string;
let myName: name = "홍길동";
console.log(myName);
// 함수 타입
type addType = (a: number, b: number) => number;
const addNum: addType = (a: number, b: number) => a + b;
console.log(addNum(1, 2));
// 복합 타입
type studentInfoType = {
  name: string;
  age: number;
  grade: number[];
};

const student2: studentInfoType = {
  name: "홍길동",
  age: 20,
  grade: [99, 85, 90],
};

// 문제1: 나이를 나타내는 타입 별칭을 만들고, 25살을 저장하는 변수를 선언
type age = number;
let myAge: age = 25;
// 문제2: 계절을 나타내는 타입 별칭을 만들고, 봄, 여름, 가을, 겨울 중 하나만 가능하도록
type season = "봄" | "여름" | "가을" | "겨울";
// 문제3: 책 정보를 나타내는 타입 별칭을 만들고, 제목과 저자를 포함하는 객체를 생성
type bookInformation = {
  title: string;
  author: string;
};
let bookInformation1: bookInformation = {
  title: "타입 스크립트",
  author: "두운",
};
// 문제4: 두 숫자를 비교해서 큰 수를 반환하는 함수의 타입 별칭을 정의하고 사용
type bigNumber = (num1: number, num2: number) => number;
const bigNum = (num1: number, num2: number): number =>
  num1 > num2 ? num1 : num2;
