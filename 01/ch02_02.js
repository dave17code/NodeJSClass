let pi;
pi = 3.141592;
console.log(pi);

let radius = 12;
console.log(`넓이: ${pi * radius * radius}`);
console.log(`둘레: ${pi * 2 * radius}`);

console.log("====================================================");
// 1. 변수 age를 선언만 하고, console.log로 출력해 보세요.
let age;
console.log(age); // 아직 값이 할당되지 않았으므로 undefined가 출력됩니다.
// 2. 변수 name을 선언하고 "홍길동"이라는 값을 할당한 후 출력해 보세요.
let name = "홍길동";
console.log(name);
// 3. 변수 width와 height를 선언하고, 각각 5, 10을 할당한 뒤,
// 넓이(가로 × 세로)를 계산해서 출력해 보세요.
let width = 5;
let height = 10;
let area = width * height;
console.log("넓이: " + area);
// 4. 원의 반지름 r이 7일 때, 원의 둘레를 계산해 보세요.
// 원의 둘레 공식: 2 * Math.PI * r
let r = 7;
let circumference = 2 * Math.PI * r;
console.log("원의 둘레: " + circumference);
// 5. 변수 score를 선언하고 80을 할당한 다음, console.log를 이용해
// "점수는 80점입니다."가 출력되도록 만들어 보세요.
let score = 80;
console.log("점수는 " + score + "점입니다.");

console.log("====================================================");
// 1. 변수 msg에 "안녕"이라는 값을 할당한 후, " 친구"를 붙여서 출력해 보세요.
let msg = "안녕";
console.log(msg + " 친구");
// 2. 변수 count를 5로 선언하고, count++ 한 다음 출력해 보세요.
let count = 5;
count++;
console.log(count);
// 3. 변수 num이 10일 때, console.log(num++)의 결과와 그 이후의 num 값을 확인해 보세요.
let num = 10;
console.log(num++);
console.log(num);
// 4. 변수 x가 3일 때, console.log(++x)의 결과는 얼마인가요?
let x = 3;
console.log(++x);
// 5. 변수 text를 "Node"로 선언하고, 여기에 "JS"를 붙여서 "NodeJS"가 되도록 만들어 출력해 보세요.
let text = "Node";
text += "JS";
console.log(text);

console.log("===========형 변환===========");
console.log(typeof 52); // number
console.log(typeof String(52)); // string
console.log(Number("52"), typeof "52", typeof Number(52));
console.log(Number(true), Number(false));
console.log(Number("hello"));
console.log(isNaN(Number("hello")));
console.log("===========Boolean===========");
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("hello"));
console.log(Boolean(isNaN));

console.log(parseInt("123"), typeof parseInt("123"));
console.log(parseInt("123abc"), typeof parseInt("123abc"));
console.log(25 + 125);
console.log(typeof ("25" + 125));
console.log(typeof ("25" - 125));
