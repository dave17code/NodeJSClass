class Animal {
  protected name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public move(distance: number = 0): void {
    console.log(`${this.name} moved ${distance}`);
  }
  public getInfo(): string {
    return `이름: ${this.name} 나이: ${this.age}`;
  }
}
const animal1 = new Animal("동물", 10);
console.log(`animal info: ${animal1.getInfo()}`);

interface Flyable {
  fly(): void;
}

class Bird extends Animal implements Flyable {
  private wingspan: number;
  constructor(name: string, age: number, wingspan: number) {
    super(name, age);
    this.wingspan = wingspan;
  }
  fly() {
    console.log(`${this.name} is flying with wingspan ${this.wingspan}`);
  }
}

const bird = new Bird("참새", 2, 0.5);
console.log(`${bird.getInfo()}`);
bird.fly();

// 문제1: Animal Class를 상속 받고
interface Swimmable {
  swim(): void;
}
// 문제1: Animal을 상속 받은 Fish, Duck 클래스를 만들고 둘 다 Swimmable을 구현
// Fish 클래스에는 추가 속성 color, Duck 클래스는 추가 속성 featherColor
class Fish extends Animal implements Swimmable {
  private color: string;
  constructor(name: string, age: number, color: string) {
    super(name, age);
    this.color = color;
  }
  swim(): void {
    console.log("물고기가 수영을 합니다.");
  }
}

class Duck extends Animal implements Swimmable {
  protected featherColor: string;
  constructor(name: string, age: number, featherColor: string) {
    super(name, age);
    this.featherColor = featherColor;
  }
  swim(): void {
    console.log("오리가 수영을 합니다.");
  }
}

class Person3 {
  protected _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error("이름은 3글자 이상이어야 합니다.");
    }
    this._name = value;
  }
}

const p3 = new Person3();
p3.name = "김두운";
console.log(p3.name);
