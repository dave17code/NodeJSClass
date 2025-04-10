let personInfo = {
  name: "지훈",
  age: 40,
  address: "양천구",
  hobby: ["fishing", "rc", "star"],
};

console.log(personInfo.name);
console.log(personInfo.age);
console.log(personInfo.address);
console.log(personInfo.hobby);

console.log(personInfo["name"]);
console.log(personInfo["age"]);
console.log(personInfo["address"]);
console.log(personInfo["hobby"]);

// 문제1
// 아래 조건에 해당하는 책(book) 객체를 만들어 보세요.
// 제목 : "자바스크립트 배우기" -> title
// 저자 : "홍길동" -> author
// 가격 : 25000 -> price
// 출판 여부 : true -> published
let book = {
  title: "자바스크립트 배우기",
  author: "홍길동",
  price: 25000,
  publislhed: true,
};

console.log(book.title);
console.log(book.author);
console.log(book.price);
console.log(book.publislhed);

book.title = "노드 배우기"; // 객체 속성 수정
book.publisher = "한빛출판사"; // 객체 속성 추가
console.log(book);

delete book.author; // 객체 속성 삭제
console.log(book);

let user = {
  name: "지훈",
  age: 30,
};
// 문제1: address 속성 추가 -> "서울시 강남구 서초동 123"
user.address = "서울시 강남구 서초동 123";
// 문제2: age 속성을 40으로 수정
user.age = 40;
// 문제3: phone 속성 추가 010-1234-5678
user.phone = "010-1234-5678";
console.log(user);
// 문제4: address 속성 삭제
delete user.address;
console.log(user);

let car = {
  brand: "현대",
  color: "흰색",
};

// 문제1: model(차종) 추가 -> 아반떼
car["model"] = "아반떼";
// 문제2: type 속성 추가 -> 승용차
car["type"] = "승용차";
// 문제3: year 속성 추가 -> 2025
car["year"] = 2025;
// 문제4: color 속성 검정으로 변경
car["color"] = "검정";
console.log(car);
// 문제5: brand 삭제
delete car["brand"];
console.log(car);

car.selfDrive = function () {
  console.log(`${this.model} 셀프 드라이브를 시작합니다.`);
};
car.selfDrive();

// 문제1: person 객체를 만들고 name, age 속성을 주고
// sayHello 속성에 함수를 추가
// sayHello 함수는 안녕하세요 제 이름은 name 출력
let person = {
  name: "두운",
  age: 32,
  sayHello: function () {
    console.log(`안녕하세요 제 이름은 ${this.name} 입니다.`);
  },
};
person.sayHello();

class PersonInfo {
  constructor(name, age, address, hobby) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.hobby = hobby;
  }
  addAge(age) {
    this.age = this.age += age;
  }
  getAge() {
    return this.age;
  }
}

let person1 = new PersonInfo("지훈", 40, "서울시 양천구", ["fish", "rc"]);
console.log(person1);
person1.addAge(10);
console.log(`${person1.name}님의 증가된 나이는 ${person1.getAge()}`);

// 클래스 명은 CarInfo
// 속성: brand, color, model
// 메서드: drive() -> 모델 ddd가 달리는 중, stop() -> 모델 ddd가 멈춤
// 객체 2개 생성 후 drive, stop 호출 해보기
class CarInfo {
  constructor(brand, color, model) {
    this.brand = brand;
    this.color = color;
    this.model = model;
  }
  drive() {
    console.log(`${this.model}가 달리는 중`);
  }
  stop() {
    console.log(`${this.model}가 멈춤`);
  }
}

let car1 = new CarInfo("현대", "화이트", "아반떼");
car1.drive();
car1.stop();

let car2 = new CarInfo("현대", "검정", "그랜저");
car2.drive();
car2.stop();

class Employee extends PersonInfo {
  constructor(name, age, address, hobby, salary) {
    super(name, age, address, hobby);
    this.salary = salary;
  }

  addSalary(increseAmout) {
    this.salary += increseAmout;
  }
  getSalary() {
    return this.salary;
  }
}

let emp1 = new Employee("민지", 20, "서울시 강남구", ["뉴진스"], 2000000);
emp1.addSalary(1000000);
console.log(emp1.getSalary());
console.log(emp1);

// 문제1: CarInfo 클래스를 상속 받는 ElectricCarInfo 클래스를 만드는데
// 추가 속성은 battery Int형
// 추가 메서드는 charge() 충전 중... 출력
// ElectricCarInfo 객체를 생성한 뒤에 drive, stop, charge 메서드를 호출
class ElectricCarInfo extends CarInfo {
  constructor(brand, color, model, battery) {
    super(brand, color, model);
    this.battery = battery;
  }
  charge() {
    console.log("충전 중...");
  }
}

let electricCar = new ElectricCarInfo("테슬라", "블랙", "모델3", 10000);
console.log(electricCar);
electricCar.drive();
electricCar.stop();
electricCar.charge();

class MathUtil {
  static add(a, b) {
    return a + b;
  }
  static multiply(a, b) {
    return a * b;
  }
}
console.log(MathUtil.add(1, 3));
// 문제1: 곱하기 메서드 multiply 정적 메서드를 추가 해보세요.
console.log(MathUtil.multiply(9, 9));

class User {
  static count = 0;
  constructor(name) {
    this.name = name;
    User.count++;
  }
  static showCount() {
    console.log(`현재 유저수: ${User.count}`);
  }
}

const user1 = new User("지훈");
const user2 = new User("혜진");
const user3 = new User("성래");
User.showCount();
