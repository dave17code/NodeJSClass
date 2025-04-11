import "reflect-metadata";

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "새로운 속성";
    hello = "안녕하세요";
  };
}

@classDecorator
class ExampleClass {
  constructor(name: string) {}
}

const ex1 = new ExampleClass("홍길동");
console.log("Name", ex1);
console.log("New Propery", (ex1 as any).newProperty);
console.log("Hello", (ex1 as any).hello);
