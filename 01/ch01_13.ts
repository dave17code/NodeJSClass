function add(x: number, y: number): number {
  return x + y;
}
console.log(add(1, 2));

function concat(first: string, second: string): string {
  return first + second;
}
console.log(concat("hello", "world"));

// 문제1: 두 숫자를 입력 받아서 큰 값을 반환
function getBigNum(a: number, b: number): number {
  return a > b ? a : b;
}

// 문제2: 문자를 입력 받아서 문자열 길이를 반환
function getStringLength(str: string): number {
  return str.length;
}

// 문제3: 숫자를 하나 입력 받아서 짝수인지 판별
function isEvenNumber(num: number): boolean {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// 선택적 매개변수
function buildName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName;
}
console.log(buildName("두운", "김"));
console.log(buildName("두운"));

// 문제1: 이름, 나이를 입력 받아 프로필을 만드는 함수
// 이름 필수, 나이 선택
function makeProfile(name: string, age?: number): string {
  return age
    ? `프로필: 이름은 ${name} 나이는 ${age}세`
    : `프로필: 이름은 ${name}`;
}
console.log(makeProfile("홍길동", 20));
console.log(makeProfile("홍길동"));

// 문제2: 상품의 이름, 가격, 할인율을 입력 받아 최종 가격을 계산하는 함수
// 이름과 가격은 필수, 할인율은 선택
function calculatePrice(
  productName: string,
  price: number,
  discountPercent?: number
) {
  if (discountPercent) {
    const finalPrice = price * (1 - discountPercent / 100);
    return `상품 이름은 ${productName}, 최종 가격은 ${finalPrice}원 입니다.`;
  } else {
    return `상품 이름은 ${productName}, 최종 가격은 ${price}원 입니다.`;
  }
}
console.log(calculatePrice("아이폰", 20000000, 20));
console.log(calculatePrice("아이폰", 10000000));

function greetSomeone(name: string, greeting: string = "안녕하세요"): string {
  return `${greeting} ${name}`;
}
console.log("Greet", greetSomeone("김두운"));
console.log("Greet", greetSomeone("김두운", "반갑습니다"));

function sum(...numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur);
}

function process(x: number): number;
function process(x: string): string;
function process(x: any): any {
  if (typeof x === "number") {
    return x * 2;
  }
  return `processed: ${x}`;
}

console.log(process(10));
console.log(process("hello"));

// 제네릭 함수
function identity<T>(arg: T): T {
  return arg;
}

console.log("identity number", identity<number>(42));
console.log("identity number", identity<string>("42"));

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

const myGeneric = new GenericNumber<number>();
myGeneric.zeroValue = 0;
myGeneric.add = (x, y) => x + y;
console.log(myGeneric.add(5, 2));
