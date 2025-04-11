let isDone: boolean = false;
console.log(isDone);
let decimal: number = 16;
console.log(decimal);
let color: String = "blue";
console.log(color);
let list: number[] = [1, 2, 3, 4];
let tuple: [string, number, string] = ["a", 1, "b"];

enum Color {
  Red,
  Green,
  Blue,
}
let myFavoriteColor: Color = Color.Blue;
console.log(`Enum color:`, myFavoriteColor);

let notSure: any = 4;
notSure = "Hello";
notSure = false;
notSure = 1;
notSure = [1, 2, 3, 4];
console.log(notSure);

enum ColorStr {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}
let myStrColor: ColorStr = ColorStr.Blue;
console.log(myStrColor);

// 문제 1 : 1부터 10까지의 숫자 중에서 3의 배수만 담은 배열을 만들어보세요.
let array: number[] = [];
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    array.push(i);
  }
}
console.log(array);
// 문제 2 : "안녕하세요"와 "TypeScript"를 연결하여 새로운 문자열을 만들어보세요.
let newStr: string = "";
newStr = "안녕하세요" + " TypeScript";
console.log(newStr);
// 문제 3 : 요일을 나타내는 열거형을 만들고, 월요일을 변수에 할당해보세요.
enum Days {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}
let monday: Days = Days.Monday;
console.log(monday);
// 문제 4 : 숫자 10이 5보다 큰지 확인하는 불리언 값을 만들어보세요.
let compare: boolean = false;
compare = 10 > 5;
console.log(compare);

let unionType: string | number = "hello";
unionType = 42;
console.log(unionType);

let userStatus: "활성" | "비활성" | Date;
userStatus = "비활성";
userStatus = new Date();
console.log(userStatus);

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(`string length is ${strLength}`);
