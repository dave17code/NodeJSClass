// 1. 문제: smartphone 객체를 생성하고, 제조사(manufacturer), 모델명(model), 출시일(releaseDate) 속성을 가진 객체를 만들어보세요.
let smartphone = {
  manufacturer: "애플",
  model: "아이폰 16 플러스",
  releaseDate: "2024-08-01",
};
// 2. 문제: 위에서 만든 smartphone 객체의 모든 속성과 값을 출력하는 코드를 작성하세요.
const { manufacturer, model, releaseDate } = smartphone;

// 3. 문제: 객체에 메서드를 추가하여 출시일을 1년 뒤로 변경하는 postponeReleaseDate 메서드를 만들어보세요.'
smartphone.postponeReleaseDate = function (date) {
  let postponeReleaseDate = new Date(this.releaseDate);
  postponeReleaseDate.setFullYear(postponeReleaseDate.getFullYear() + 1);
  this.releaseDate = postponeReleaseDate.toISOString().split("T")[0];
};
smartphone.postponeReleaseDate(smartphone.releaseDate);
console.log(smartphone.releaseDate);
// 4. 문제: MobileDevice 클래스를 만들고, 생성자에서 제조사, 모델명, 출시일을 받아 초기화하는 코드를 작성하세요.
// 5. 문제: MobileDevice 클래스에 출시일을 가져오는 getReleaseDate 메서드를 추가하세요.
// 9. 문제: MobileDevice 클래스에 기능(features) 배열을 추가하고, 기능을 추가하는 addFeature 메서드를 작성하세요.
class MobileDevice {
  constructor(brand, model, releaseDate, feature) {
    this.brand = brand;
    this.model = model;
    this.releaseDate = releaseDate;
    this.feature = feature;
  }
  getReleaseDate() {
    return this.releaseDate;
  }
  addFeature(newFeature) {
    this.feature.push(newFeature);
  }
  moveReleaseDate(month) {
    let date = new Date(this.releaseDate);
    date.setMonth(date.getMonth() - month);
    this.releaseDate = date;
  }
}

// 6. 문제: SmartPhone 클래스를 MobileDevice 클래스를 상속받아 만들고, 추가로 운영체제(os) 속성을 가지도록 작성하세요.
class SmartPhone extends MobileDevice {
  constructor(brand, model, releaseDate, os) {
    super(brand, model, releaseDate);
    this.os = os;
  }
}
// 7. 문제: 정적 메서드(getReleaseDateDifference)를 사용하여 두 기기의 출시일 차이를 계산하는 DeviceHelper 클래스를 만들어보세요.
class DeviceHelper {
  static getReleaseDateDifference(firstDevice, secondDevice) {
    let firstDeviceReleaseDate = new Date(firstDevice.releaseDate);
    let secondDeviceReleaseDate = new Date(secondDevice.releaseDate);

    // 두 날짜 차이를 밀리초 단위로 계산
    let diffMs = Math.abs(firstDeviceReleaseDate - secondDeviceReleaseDate);

    // 밀리초를 일(day) 단위로 변환
    let diffDays = diffMs / (1000 * 60 * 60 * 24);
    return `출시일 차이는 ${diffDays}일`;
  }
}
let galaxy = new SmartPhone("갤럭시", "S24", "2024-01-01");
let iphone = new SmartPhone("아이폰", "16플러스", "2024-08-01");
console.log(DeviceHelper.getReleaseDateDifference(galaxy, iphone));

// 8. 문제: 객체의 속성에 접근하는 두 가지 방법을 모두 사용하여 모델명을 출력하는 코드를 작성하세요.
console.log(galaxy.model, galaxy["model"]);

// 10. 문제: MobileDevice 클래스의 인스턴스를 생성하고, 메서드를 사용하여 출시일을 3개월 앞당기는 코드를 작성하세요.
let myPhone = new SmartPhone("애플", "아이폰16", "2025-04-11", "iOS");
myPhone.moveReleaseDate(3);
console.log(myPhone.releaseDate.toISOString().split("T")[0]);
