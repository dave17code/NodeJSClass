// 선언 함수
function add1(x, y) {
  const sum = x + y;
  return sum;
}

console.log(add1(1, 2));

// 익명 함수
const add2 = function (x, y) {
  const sum = x + y;
  return sum;
};

console.log(add2(7, 7));

// 화살표 함수
const add3 = (x, y) => {
  return x + y;
};
console.log(add3(8, 8));

// multiply
// 1. 선언 함수 multiply1
// 2. 익명 함수 multiply2
// 3. 화살표 함수 multiply3
function multiply1(a, b) {
  return a * b;
}
console.log(multiply1(2, 2));

const multiply2 = function (a, b) {
  return a * b;
};
console.log(multiply2(3, 3));

const multiply3 = (a, b) => a * b;
console.log(multiply3(4, 4));

// 선언 함수
function greet(name) {
  return `Hello ${name}`;
}

// 1. greet 함수의 익명함수
const greet1 = function (name) {
  return `Hello ${name}`;
};

// 2. greet 함수의 화살표 함수
const greetArrow = (name) => `Hello ${name}`;

function ten(callback) {
  for (let i = 0; i < 10; i++) {
    callback();
  }
}

ten(() => {
  console.log("callback");
});
