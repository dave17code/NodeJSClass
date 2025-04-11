export interface User {
  name: string;
  age: number;
}

export class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }
  getUsers(): User[] {
    return this.users;
  }
}

// ------- 외부 파일
import { User as User2, UserService as UserService2 } from "./ch01_15";
const userService = new UserService2();
const user: User2 = {
  name: "홍길동",
  age: 25,
};
const user2: User2 = {
  name: "김두운",
  age: 32,
};
userService.addUser(user);
userService.addUser(user2);
console.log(userService.getUsers());

namespace Calculator {
  export interface Operation {
    calculate(a: number, b: number): number;
  }

  export class Add implements Operation {
    calculate(a: number, b: number): number {
      return a + b;
    }
  }
}

const add = new Calculator.Add();
console.log(add.calculate(1, 2));
