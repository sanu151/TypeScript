// Union Data Type

let val: string | number | boolean; // variable 'val' can be a string or a number or a boolean

val = "Supriyo Das"; // val assign as a string
console.log(val);

val = 123; // val assign as a number
console.log(val);

val = true; // val assing as a boolean
console.log(val);

// Union data type in function parameter

function display(param: string | number) {
  console.log(param);
}

display("Hello Supriyo");
display(9932562329);
