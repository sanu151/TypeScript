let usersData: object[];

usersData = [];

let user1: { userName: string; userId: number };
user1 = {
  userName: "Supriyo Das",
  userId: 101,
};
usersData.push(user1);

let user2: { userName: string; userId: number };
user2 = {
  userName: "Rupa Das",
  userId: 102,
};
usersData.push(user2);

let user3: { userName: string; userId?: number };
user3 = {
  userName: "Rishika Das",
};
usersData.push(user3);

for (const key in usersData) {
  console.log(usersData[key]);
}
