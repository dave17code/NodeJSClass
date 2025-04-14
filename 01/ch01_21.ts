let isDone: boolean = false;
let decimal: number = 0;
let color: string = "blue";
let list: number[] = [1, 2, 3, 4, 5];
let tuple: [string, number] = ["hello", 10];

enum Color {
  Red = "Red",
  Blue = "Blue",
  Green = "Green",
}

let fColor = Color.Red;
console.log(fColor);

let anyTest: any = 4;
anyTest = "Hello";
anyTest = false;
console.log(anyTest);

function voidTest(): void {
  console.log("voidTest");
}
voidTest();

// 에러가 반드시 발생하는 곳
function error(message: string): never {
  throw new Error(message);
}

// 무한 루프
function infiniteLoop(): never {
  while (true) {}
}

let ul: undefined = undefined;
console.log(ul);

let nl: null = null;
console.log(nl);

let udata: string | number | null = "typescript";
udata = 2024;
udata = null;
udata = "typescript union";
console.log(udata);

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "홍길동",
  age: 25,
};

interface ColorConfig {
  color?: string;
  width?: number;
}

const color1: ColorConfig = {
  color: "red",
};

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date): void {
    this.currentTime = d;
  }
}

type PointType = {
  x: number;
  y: number;
};

const pt: PointType = {
  x: 30,
  y: 40,
};

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

const sq1: Square = {
  color: "blue",
  sideLength: 10,
};

// 1. 회원(Member)의 id(number), nickname(string)을 가지는 인터페이스를 정의하고 객체를 출력해보세요.
// 2. ProductConfig 라는 인터페이스를 만들어 name(string, 필수), price(number, 필수), discountRate(number, 선택)를 정의하고 할인율은 넣지 않고 객체를 출력해보세요.
// 3. AnimalInterface를 정의하고 name(string), sound(string), saySound():void 메서드를 갖는 Dog 클래스를 만들어 동물 소리를 출력해보세요.
// 4. 타입 별칭(type)으로 LoginInfo 타입을 만들어 email(string), password(string)을 정의하고 객체를 출력해보세요.
interface Member {
  id: number;
  nickname: string;
}

const member1: Member = {
  id: 1,
  nickname: "홍길동",
};

interface ProductConfig {
  name: string;
  price: number;
  discountRate?: number;
}

interface AnimalInterface {
  name: string;
  sound: string;
  saySound(): void;
}

class Dog implements AnimalInterface {
  name: string;
  sound: string;
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  saySound(): void {
    console.log(this.sound);
  }
}
let dog1 = new Dog("retriever", "mung");
dog1.saySound();

type LoginInfo = {
  email: string;
  password: number;
};

const login1: LoginInfo = {
  email: "email@example.com",
  password: 1234,
};

function add(x: number, y: number): number {
  return x + y;
}

function buildName(fname: string, lname?: string) {
  return lname ? `${fname} ${lname}` : fname;
}

function greet(name: String, greeting: string = "welcome") {
  return `${greeting} ${name}`;
}

console.log(greet("홍길동"));

function process1(x: number): number;
function process1(x: string): string;
function process1(x: any): any {
  if (typeof x === "number") {
    return x * 3;
  }
  return `${x}`;
}

console.log(process1(10));
console.log(process1("hello"));

function gen1<T>(arg: T): T {
  return arg;
}
console.log(gen1<number>(42));

function gen2<T, U>(first: T, second: U): void {
  console.log(first, second);
}
gen2<string, number>("hello", 30);

function logValue<T extends string | number | boolean>(value: T): void {
  console.log(typeof value, value);
}
logValue("hello");
logValue(42);
logValue(false);

// 1. 두 개의 숫자를 더하는 sum 함수를 만들어 호출해보세요.
// 2. 사람의 이름(name: string)과 나이(age: number, 선택)을 받아서
// 3. greet 함수에 기본 매개변수 greeting = "Hello"를 사용해서
// 4. 전달받은 값을 그대로 리턴하는 제네릭 함수 echo<T>를 만들어서 문자열, 숫자를 각각 테스트해보세요.
// 5. 첫 번째 매개변수와 두 번째 매개변수를 받아 배열로 리턴하는 제네릭 함수 makePair<T, U>를 만들어 "apple", 100을 넘겨 호출해보세요.
function sum(x: number, y: number) {
  return x + y;
}
console.log(sum(15, 15));

function getUserInfo(name: string, age?: number) {
  return age ? `이름 : ${name} 나이: ${age}` : `이름 ${name}`;
}

function echo<T>(arg: T) {
  return arg;
}

function makePair<T, U>(value1: T, value2: U) {
  let arr: Array<T | U> = [];
  arr.push(value1);
  arr.push(value2);
  return arr;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged1 = { ...obj1, ...obj2 }; // 객체 결합
console.log(merged1);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // 배열 결합
console.log(combined);

const org1 = { x: 1, y: 2 };
const copied1 = { ...org1 };
console.log(org1, copied1); // 객체 복사

function sum1(...numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur);
}

const number1 = [1, 2, 3, 4, 5];
console.log(sum1(...number1));

class Animal {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public move(distance: number): void {
    console.log(`${this.name} moved ${distance}`);
  }

  public getInfo(): string {
    return `이름: ${this.name}, 나이: ${this.age}`;
  }
}
