var printTodos = function (todos) {
    if (todos) {
        todos.map(function (todo) { return console.log("".concat(todo)); });
    }
    else {
        console.log("No Todo");
    }
};
var todos = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"];
var todo1 = null;
printTodos(todos);
printTodos(todo1);
var firstName;
var lastName;
var fullName;
firstName = "Supriyo";
lastName = "Das";
fullName = firstName.concat(" ".concat(lastName));
console.log(fullName);
