interface User {
  name: string;
  age: number;
  gender: string;
}

const users: User[] = [];

const user1: User = {
  name: "Supriyo Das",
  age: 37,
  gender: "Male",
};

const user2: User = {
  name: "Rupa Das",
  age: 27,
  gender: "Female",
};

users.push(user1);
users.push(user2);

const printUserInfo = (user: User) => {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Gender: ${user.gender}`);
  console.log(" ");
};

users.forEach((user) => printUserInfo(user));
