// Array Data Types

let userName: string[];
let multipleTypes: Array<string | number | boolean>;

userName = ["Sanu", "Rupa", "Manu"];
multipleTypes = [2, "Four", 5.0, "six", true];

userName.sort();
multipleTypes.sort();

for (let x = 0; x < userName.length; x++) {
  console.log(userName[x]);
}

console.log(multipleTypes);
