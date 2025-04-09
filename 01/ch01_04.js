let date = new Date();
console.log(date);
console.log(date.getHours());
if (date.getHours() < 12) {
  // 조건이 만족했을 때 블록 코드
  console.log("오전");
} else if (date.getHours() < 19) {
  console.log("오후");
} else {
  console.log("오후");
}

// 1. 현재 시간이 오전 9시 이전이면 "출근 전",
// 9시 이상 18시 미만이면 "근무 중",
// 18시 이상이면 "퇴근 후"라고 출력하는 코드를 작성해 보세요.
let hour = date.getHours();
if (hour < 9) {
  console.log("출근 전");
} else if (hour < 18) {
  console.log("근무 중");
} else {
  console.log("퇴근 후");
}

// 2. 현재 시간이 짝수 시간이면 "짝수 시간입니다.",
// 홀수 시간이면 "홀수 시간입니다."를 출력하는 코드를 작성해 보세요.
if (hour % 2 == 0) {
  console.log("짝수 시간입니다");
} else {
  console.log("홀수 시간입니다");
}

// 삼항 연산자
const timeOfDay = hour < 12 ? "오전" : "오후";
console.log(timeOfDay);

// 1. 나이가 20살 이상이면 "성인", 그렇지 않으면 "청소년"이라는 문구를 출력하는 코드를 삼항 연산자로 작성해 보세요.(현재나이 18)
let age = 18;
console.log(age >= 20 ? "성인" : "청소년");
// 2. 현재 시간이 12시 이전이면 "AM", 아니면 "PM"을 출력하는 코드를 삼항 연산자로 작성해 보세요.
console.log(date.getHours() < 12 ? "AM" : "PM");
// 3. 변수 score가 60점 이상이면 "합격", 그렇지 않으면 "불합격"이라는 결과를 출력하는 코드를 삼항 연산자로 작성해 보세요.(현재점수 75)
let score = 75;
console.log(score >= 60 ? "합격" : "불합격");
// 4. 변수 num이 짝수면 "짝수", 홀수면 "홀수"라고 출력하는 삼항 연산자 코드를 작성해 보세요.(현재 num 10)
let num = 10;
console.log(num % 2 === 0 ? "짝수" : "홀수");
// 5. 사용자가 로그인 상태이면 "환영합니다", 아니면 "로그인 해주세요"를 출력하는 코드를 삼항 연산자로 작성해 보세요. (현재 로그인상태 false)
let userLogin = false;
console.log(userLogin === true ? "환영합니다" : "로그인 해주세요");

const day = date.getDay();
console.log(day);

switch (day) {
  case 0:
    console.log("일요일");
    break;
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
}

const month = date.getMonth();
console.log(month);
console.log(date.getMonth());

switch (month) {
  case 0:
    console.log("1월");
    break;
  case 1:
    console.log("2월");
    break;
  case 2:
    console.log("3월");
    break;
  case 3:
    console.log("4월");
    break;
  case 4:
    console.log("5월");
    break;
  case 5:
    console.log("6월");
    break;
}

// 짧은 조건문
const name = "홍길동";
const displayName = name || "익명";
console.log(`환영합니다. ${displayName}`);

// 조건부 실행
const isLogin = true;
isLogin && console.log("로그인이 되어 있습니다.");

// 1. 변수 nickname이 빈 문자열인 경우 "게스트"라는 이름을 대신 출력하도록 짧은 조건문을 이용해 코드를 작성해보세요.
let nickname = "";
console.log(nickname || "게스트");
// 2. 변수 isAdmin이 true일 때만 "관리자 페이지에 접근합니다."라는 메시지를 출력하도록 짧은 조건문을 사용해보세요.
let isAdmin = true;
console.log(isAdmin && console.log("관리자 페이지에 접근합니다."));

const userInput = null;
const defaultValue = "기본값";
const result = userInput ?? defaultValue;
console.log(`결과: ${result}`);
