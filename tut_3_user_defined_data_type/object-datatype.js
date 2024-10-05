var usersData;
usersData = [];
var user1;
user1 = {
    userName: "Supriyo Das",
    userId: 101,
};
usersData.push(user1);
var user2;
user2 = {
    userName: "Rupa Das",
    userId: 102,
};
usersData.push(user2);
var user3;
user3 = {
    userName: "Rishika Das",
};
usersData.push(user3);
for (var key in usersData) {
    console.log(usersData[key]);
}
