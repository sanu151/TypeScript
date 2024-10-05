type User = { userName: String; userId: Number };
let users: User[];
users = [];

let user1: User;
user1 = {
  userName: "Supriyo Das",
  userId: 101,
};
users.push(user1);

let user2: User;
user2 = {
  userName: "Rupa Das",
  userId: 102,
};
users.push(user2);

let user3: User;
user3 = {
  userName: "Rishika Das",
  userId: 103,
};
users.push(user3);

for (const key in users) {
  console.log(users[key]);
}

type RequestType = "GET" | "POST" | "PUT" | "DELETE";

function requestData(requestType: RequestType) {
  console.log(requestType);
}

requestData("GET");
requestData("POST");
