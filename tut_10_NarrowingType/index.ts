const printTodos = (todos: string[] | null) => {
  if (todos) {
    todos.map((todo) => console.log(`${todo}`));
  } else {
    console.log("No Todo");
  }
};

let todos = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"];
let todo1 = null;

printTodos(todos);
printTodos(todo1);

let firstName: string;
let lastName: typeof firstName;
let fullName: typeof lastName;

firstName = "Supriyo";
lastName = "Das";
fullName = firstName.concat(` ${lastName}`);
console.log(fullName);
