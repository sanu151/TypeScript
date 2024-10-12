// Create Interface
interface IUserFormat {
  formatUser: () => string;
}

class Users implements IUserFormat {
  constructor(private id: number, private name: string, private age: number) {}

  formatUser = () => {
    return `ID : ${this.id}, Name : ${this.name}, Age : ${this.age}`;
  };
}

let user1 = new Users(101, "Supriyo Das", 37);

console.log(user1.formatUser());
