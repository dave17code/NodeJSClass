console.log(typeof 10);
console.log(typeof "hello"); // string
console.log(typeof true); // boolean
console.log(typeof function () {}); // function == 함수
console.log(typeof {}); // object == 객체

// 1. 숫자 52를 문자열로 변환하고 싶을 때 어떤 함수를 사용할 수 있을까요?
console.log(typeof String(52));
// 2. true 값을 숫자로 바꾸면 어떤 숫자가 될까요?
console.log(Number(true));
// 3. 문자 "hello"를 Number()로 변환하면 어떤 결과가 나올까요?
console.log(Number("hello"));
// 4. 문자 "hello"를 숫자로 바꿨을 때 유효한 숫자인지 확인하려면 어떤 함수를 써야 할까요?
console.log(isNaN(Number("hello")));
// 5. 다음 중 Boolean()으로 변환했을 때 false가 되는 값을 모두 고르세요. -> 0,1,NaN, 빈 문자열 "", "hello"
console.log(
  Boolean(0),
  Boolean(1),
  Boolean(NaN),
  Boolean(""),
  Boolean("hello")
);
// 6. 문자열 "25"와 숫자 125를 더하면 결과는 어떻게 될까요?
console.log("25" + 125);
// 7. 문자열 "25"에서 숫자 125를 빼면 결과는 어떻게 될까요?
console.log("25" - 125);
// 8. typeof 연산자를 사용했을 때 함수는 어떤 타입으로 나올까요?
console.log(typeof function () {});
// 9. 객체 리터럴 {}의 타입은 무엇으로 나올까요?
console.log(typeof {});
// 10. undefined를 Number()로 변환하면 어떤 결과가 나올까요?
console.log(Number(undefined));

console.log(50 == "50");
console.log(50 === "50");
console.log(0 == "");
console.log(0 === "");

const test = "변경 불가";
console.log(test);
// test = "hello";
// console.log(hello);
{
  const x = "hello";
  console.log(x);
}

// 1. 숫자 100과 문자열 "100"이 같은 값인지 동등 연산자(==)로 비교하고 결과를 출력해 보세요.
console.log(100 == "100");
// 2. 숫자 100과 문자열 "100"이 완전히 같은지 일치 연산자(===)로 비교하고 결과를 출력해 보세요.
console.log(100 === "100");
// 3. 변수 title을 const로 선언하고 "고정값"을 할당한 다음, 출력해 보세요.
const title = "고정값";
console.log(title);
// 4. const로 변수를 선언하고, 초기값을 주지 않았을 때 에러가 나는 예제를 작성해 보세요.
// const a; 'const' declarations must be initialized.
// 5. 블록 {} 안에서 const로 선언한 변수를 블록 바깥에서 출력했을 때 에러가 나는 예제를 작성해 보세요.
{
  const b = "b";
}
// console.log(b); ReferenceError: b is not defined
