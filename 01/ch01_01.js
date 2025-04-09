console.log("Hello, World");
console.log("안녕하세요");

const a = "World"; // a 상수명, World는 값
console.log(`Hello ${a}`);
console.log("Hello, \nWorld");
console.log("Hello\tWorld");
console.log("Hello" + "World");

const name = "홍길동";
console.log(`안녕하세요 ${name}님`);
console.log("Javascript를 배우는 중 입니다.");
const year = 2025;
console.log(`지금은 ${year}년 입니다.`);
const age = 32;
console.log(`${name}님은 ${age}세 입니다.`);

console.log(23);
console.log(23 + 45);
console.log(23 * 45);
console.log(2 + 3 * 5);
console.log(10 / 5);
console.log(10 % 5);

console.log(52 > 52); // false
console.log(52 == 52); // true

console.log(52 >= 52 && 52 > 52); // and 연산
console.log(52 >= 52 || 52 > 52); // or 연산

console.log("========================================");
// 1. 23 + 12 * 2의 결과가 얼마인지 예측하고 console.log로 출력해 보세요.
// 2. 45 / 9의 결과가 5인지 비교하는 코드를 작성해 보세요.
// 3. 10이 3으로 나누어 떨어지는지 확인하는 코드를 작성해 보세요.
// 4. 100이 50보다 크고 200보다 작은지 확인하는 코드를 작성해 보세요.
// 5. 다음 조건 중 하나라도 참이면 true가 나오도록 코드를 작성해 보세요.
// 5는 10보다 크다.
// 10은 5보다 크다.
console.log(23 + 12 * 2 == 47);
console.log(45 / 9 == 5);
console.log(10 % 3 == 0);
console.log(100 > 50 && 100 < 200);
console.log(5 > 10 || 10 > 5);
