var users;
users = [];
var user1;
user1 = {
    userName: "Supriyo Das",
    userId: 101,
};
users.push(user1);
var user2;
user2 = {
    userName: "Rupa Das",
    userId: 102,
};
users.push(user2);
var user3;
user3 = {
    userName: "Rishika Das",
    userId: 103,
};
users.push(user3);
for (var key in users) {
    console.log(users[key]);
}
function requestData(requestType) {
    console.log(requestType);
}
requestData("GET");
requestData("POST");
