let arr = [5, 23, "hello", true, "world", -9, 10, false];
console.log(arr);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

// while
let i = 0;
while (i < arr.length) {
  console.log(`${i} is ${arr[i]}`);
  i++;
}

// for
for (let i = 0; i < arr.length; i++) {
  console.log(`${i} is ${arr[i]}`);
}

for (i in arr) {
  console.log(`${i} is ${arr[i]}`);
}

for (e of arr) {
  console.log(`${e}`);
}

// 1. 배열 ["사과", "바나나", "포도"]를 일반 for 반복문으로 순회하면서
// 0번째 과일: 사과
// 1번째 과일: 바나나
// 2번째 과일: 포도
let fruits = ["사과", "바나나", "포도"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}번째 과일: ${fruits[i]}`);
}

// 2. 배열 [100, 200, 300]을 for...in 반복문으로 순회해서
// 0: 100
// 1: 200
// 2: 300
let numbers = [100, 200, 300];
for (i in numbers) {
  console.log(`${i}: ${numbers[i]}`);
}

// 3. 배열 [true, false, true]를 for…of 반복문으로 순회해서
// 값만 한 줄씩 출력해 보세요.
let boolean = [true, false, true];
for (el of boolean) {
  console.log(el);
}

console.log("=== break ===");
// break
arr = [5, 23, "hello", true, "world", -9, 10, false];
for (i in arr) {
  if (typeof arr[i] === "string") {
    break;
  }
  console.log(arr[i]);
}

// 1. 배열 [1, 2, "멈춰", 3, 4]에서 문자열 "멈춰"가 나올 때까지
// 숫자만 출력하도록 break 문을 사용해 코드를 작성해 보세요.
let arrayOne = [1, 2, "멈춰", 3, 4];
console.log("=== 문제1 ===");
for (i in arrayOne) {
  if (typeof arrayOne[i] === "string") {
    break;
  }
  console.log(arrayOne[i]);
}

// 2. 배열 [5, 10, 15, 20, 25]에서 처음으로 15보다 큰 숫자가 나오면 출력하고 반복을 멈추는 코드를 작성해 보세요.
// 20
console.log("=== 문제2 ===");
let arrayTwo = [5, 10, 15, 20, 25];
for (i in arrayTwo) {
  if (arrayTwo[i] > 15) {
    break;
  }
  console.log(arrayTwo[i]);
}

// 1. 배열 [1, 2, 3, 4, 5]에서 짝수만 출력하는 코드를 작성해 보세요.
// 2
// 4
let arrayThree = [1, 2, 3, 4, 5];
console.log("=== 문제3 ===");
for (i in arrayThree) {
  if (arrayThree[i] % 2 === 0) {
    console.log(arrayThree[i]);
  }
}

// 2. 배열 [1, 2, 3, 4, 5]에서 홀수만 출력하는 코드를 작성해 보세요.
// 1
// 3
// 5
let arrayFour = [1, 2, 3, 4, 5];
console.log("=== 문제4 ===");
for (i in arrayFour) {
  if (arrayFour[i] % 2 === 1) {
    console.log(arrayFour[i]);
  }
}

// continue
console.log("=== continue ===");
arr = [5, 23, "hello", true, "world", -9, 10, false];

for (i in arr) {
  if (typeof arr[i] === "string") {
    continue;
  }
  console.log(arr[i]);
}

// 1. 배열 [1, 2, 3, 4, 5]에서 짝수만 출력하도록 continue를 사용해 보세요.
console.log(
  "문제1: 배열 [1, 2, 3, 4, 5]에서 짝수만 출력하도록 continue를 사용해 보세요. "
);
arr = [1, 2, 3, 4, 5];
for (i in arr) {
  if (arr[i] % 2 === 1) {
    continue;
  }
  console.log(arr[i]);
}

// 2. 1부터 10까지 반복하면서, 3의 배수는 건너뛰고 나머지 수만 출력해 보세요.
console.log(
  "문제2: 1부터 10까지 반복하면서, 3의 배수는 건너뛰고 나머지 수만 출력해 보세요."
);
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

// 3. 배열 ["사과", 1, "바나나", 2, "포도"]에서 문자열만 출력하도록 continue를 사용해 보세요.
arr = ["사과", 1, "바나나", 2, "포도"];
console.log("=== 문제3 ===");
for (i in arr) {
  if (typeof arr[i] !== "string") {
    continue;
  }
  console.log(arr[i]);
}

// 4. 1부터 20까지 반복하면서 짝수이면서 4의 배수는 출력하지 않도록 continue를 사용해 보세요.
console.log("=== 문제4 ===");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// 5. 배열 ["hello", null, "world", undefined, "javascript"]에서 null이나 undefined를 건너뛰고 나머지만 출력해 보세요.
console.log("=== 문제5 ===");
arr = ["hello", null, "world", undefined, "javascript"];
for (i of arr) {
  if (i === null || i === undefined) {
    continue;
  }
  console.log(i);
}
