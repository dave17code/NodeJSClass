interface User {
  name: string;
  age: number;
  email?: string;
}

type PartialUser = Partial<User>;

// interface PartialUsers {
//   name?: string;
//   age?: number;
//   email?: string;
// }

const userPartial1: PartialUser = {
  name: "김두운",
};

const userPartial2: PartialUser = {
  name: "손흥민",
};

type RequiredUser = Required<User>;

const userRequired: RequiredUser = {
  name: "홍길동",
  age: 12,
  email: "a@email.com",
};
