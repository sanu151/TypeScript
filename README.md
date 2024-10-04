# TypeScript

#### TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.

![image](https://github.com/user-attachments/assets/96925d53-3545-41f6-839e-5a17f4384582)


## Introduction to TypeScript: A Superset of JavaScript

**TypeScript** is a programming language that's a superset of JavaScript. This means that any valid JavaScript code is also valid TypeScript code. However, TypeScript adds optional static typing to JavaScript, which can help developers catch potential errors earlier in the development process.

**Why use TypeScript?**

* **Improved code quality:** Static typing can help identify potential errors before they become runtime issues.
* **Better code readability:** Type annotations can make code more self-documenting.
* **Enhanced tooling support:** Many popular code editors and IDEs provide excellent support for TypeScript, including features like autocompletion, code navigation, and refactoring.
* **Larger community and ecosystem:** TypeScript has a growing community and ecosystem, with numerous libraries and frameworks available.

**Key features of TypeScript:**

* **Types:** TypeScript introduces a type system that allows you to specify the data types of variables, functions, and properties. This can include primitive types (e.g., number, string, boolean), object types, and custom types.
* **Interfaces:** Interfaces define the contract for an object, specifying the properties and methods it must have.
* **Classes:** Classes provide a way to create object-oriented code in TypeScript, with features like inheritance, encapsulation, and polymorphism.
* **Modules:** Modules allow you to organize your code into separate files and import/export functionality between them.
* **Generics:** Generics provide a way to create reusable components that can work with different data types.

**Getting started with TypeScript:**

1. **Installation:** You can install TypeScript using npm or yarn:
   ```bash
   npm install -g typescript
   ```
2. **Creating a TypeScript file:** Create a new file with a `.ts` extension (e.g., `app.ts`).
3. **Writing TypeScript code:** Start writing your TypeScript code, using types and other features as needed.
4. **Compiling to JavaScript:** Use the TypeScript compiler (`tsc`) to convert your TypeScript code into JavaScript:
   ```bash
   tsc app.ts
   ```

**Example:**

```typescript
let message: string = "Hello, TypeScript!";
console.log(message);
```

This code defines a variable named `message` with the type `string` and assigns it the value "Hello, TypeScript!". It then logs the message to the console.

By understanding the basics of TypeScript, you can write more robust, maintainable, and scalable JavaScript applications.

## Environment setup for TypeScript:

**Prerequisites:**

- **Node.js and npm (or yarn):** Ensure you have Node.js installed on your system. You can download it from the official website ([https://nodejs.org/](https://nodejs.org/)). npm (Node Package Manager) comes bundled with Node.js.
- **A code editor or IDE:** Choose a suitable code editor or IDE that supports TypeScript. Popular options include:
  - **Visual Studio Code:** A free and open-source editor with excellent TypeScript support.
  - **WebStorm:** A powerful IDE from JetBrains, offering advanced features for TypeScript development.
  - **Sublime Text:** A lightweight and customizable editor with TypeScript plugins available.

**Steps:**

1. **Create a new project directory:** Choose a location on your computer and create a new directory for your TypeScript project.
2. **Initialize a package.json file:** Open a terminal or command prompt, navigate to the project directory, and run the following command:

   ```bash
   npm init -y
   ```

   This will create a `package.json` file, which will store information about your project.
3. **Install TypeScript:** Use npm (or yarn) to install TypeScript globally:

   ```bash
   npm install -g typescript
   ```

   Alternatively, you can install it locally for your project:

   ```bash
   npm install --save-dev typescript
   ```

4. **Create a TypeScript configuration file (optional):** If you want to customize TypeScript's behavior, you can create a `tsconfig.json` file in your project directory. This file allows you to specify compiler options, such as the target JavaScript version, module system, and more. For example:

   ```json
   {
     "compilerOptions": {
       "target": "es5",
       "module": "commonjs",
       "outDir": "./dist",
       "sourceMap": true
     }
   }
   ```

5. **Start writing TypeScript code:** Create a new TypeScript file (e.g., `index.ts`) in your project directory and start writing your code. You can use the TypeScript language features and syntax.
6. **Compile TypeScript to JavaScript:** Use the TypeScript compiler (`tsc`) to compile your TypeScript code into JavaScript:

   ```bash
   tsc index.ts
   ```

   This will create a corresponding JavaScript file (e.g., `index.js`) in the specified output directory (if defined in your `tsconfig.json`).

**Additional tips:**

- **Linting:** Consider using a linter like ESLint with TypeScript support to enforce code quality standards and catch potential errors.
- **Type checking:** TypeScript's type system can help you catch errors early in the development process. Make use of type annotations to improve code readability and maintainability.
- **Build tools:** For larger projects, consider using a build tool like Webpack or Parcel to manage your TypeScript code, dependencies, and other assets.

By following these steps and leveraging the powerful features of TypeScript, you can set up a robust development environment for building modern JavaScript applications.



**Transpile TypeScript into JavaScript**

VS Code integrates with tsc through our integrated task runner. We can use this to transpile .ts files into .js files. Another benefit of using VS Code tasks is that you get integrated error and warning detection displayed in the Problems panel. 

![image](https://github.com/user-attachments/assets/541af042-888c-4204-9852-f8c609775f25)

## Creating First TypeScript Program

**1. Set Up Your Development Environment:**

* **Install Node.js and npm:** If you haven't already, download and install Node.js from [https://nodejs.org/en](https://nodejs.org/en). npm (Node Package Manager) is bundled with Node.js.
* **Create a project directory:** Choose a location on your computer and create a new directory for your TypeScript project.

**2. Initialize a TypeScript Project:**

* **Navigate to the project directory:** Open a terminal or command prompt and navigate to the project directory.
* **Initialize a package.json file:** Run the following command to create a `package.json` file:
  ```bash
  npm init -y
  ```

**3. Install TypeScript:**

* **Install TypeScript globally:**
  ```bash
  npm install -g typescript
  ```
  Or, **install TypeScript locally:**
  ```bash
  npm install --save-dev typescript
  ```

**4. Create a TypeScript File:**

* **Create a new TypeScript file:** Create a file named `index.ts` in your project directory.

**5. Write Your First TypeScript Code:**

* **Open the file:** Open `index.ts` in your favorite code editor.
* **Write a simple TypeScript program:**
  ```typescript
  let message: string = "Hello, TypeScript!";
  console.log(message);
  ```

**6. Compile to JavaScript:**

* **Use the TypeScript compiler:** Run the following command in your terminal:
  ```bash
  tsc index.ts
  ```
  This will create a new file named `index.js` in the same directory.

**7. Run the JavaScript Code:**

* **Execute the generated JavaScript:** Use Node.js to run the `index.js` file:
  ```bash
  node index.js
  ```
  You should see the message "Hello, TypeScript!" printed in the console.

**Explanation:**

* **`let message: string = "Hello, TypeScript!";`**: This line declares a variable named `message` and assigns it the value "Hello, TypeScript!". The `: string` part indicates that the variable is of type `string`.
* **`console.log(message);`**: This line logs the value of the `message` variable to the console.

This simple program demonstrates the basic structure of a TypeScript file and how to use type annotations.

## Built-in Data Types in TypeScript: A Deeper Dive

TypeScript provides a rich set of built-in data types for representing various kinds of values. These types can be classified into two primary categories: **Primitive Types** and **Object Types**.

### Primitive Types

* **any:** any is a special type in TypeScript that can represent any value. It's often used when you're unsure about the type of a value or when you want to avoid strict type checking.
* **Number:** Represents numerical values, including integers and floating-point numbers. TypeScript supports a wide range of numeric operations, such as arithmetic, comparison, and mathematical functions. You can use the `number` type to represent integers, decimals, and scientific notation.
* **String:** Represents sequences of characters. Strings are used to store text, and TypeScript provides various methods for manipulating strings, such as concatenation, substring extraction, and case conversion.
* **Boolean:** Represents true or false values. Boolean values are often used in conditional statements and logical expressions.
* **Null:** Represents the absence of a value. The `null` type is often used to indicate that a variable or property is intentionally empty.
* **Undefined:** Represents a variable that has not been assigned a value yet. The `undefined` type is often used as a default value for variables.
* **Symbol:** Represents a unique identifier for a value. Symbols are often used as keys in objects to create private properties or avoid naming conflicts.

### Object Types

* **Object:** Represents a collection of key-value pairs. Objects are used to store data in a structured way. You can access and modify properties of an object using dot notation or bracket notation.
* **Array:** Represents an ordered collection of elements. Arrays are used to store multiple values of the same type. You can access elements of an array using their index.
* **Tuple:** Represents a fixed-length array with elements of specific types. Tuples are useful when you need to represent a sequence of values with predetermined types.
* **Function:** Represents a function. Functions are used to perform specific tasks and can take arguments and return values.
* **Enum:** Represents a set of named constants. Enums are often used to define a set of related values that can be easily referenced by their names.

**Examples:**

```typescript
// Primitive types
let num: number = 10.5; // A floating-point number
let str: string = "Hello, world!"; // A string
let bool: boolean = true; // A boolean value
let nul: null = null; // A null value
let undef: undefined; // An undefined value
let sym: symbol = Symbol("unique symbol"); // A symbol
let value: any = "Hello"; // Any data type
value = 42;
value = true

// Object types
let obj: object = { name: "Alice", age: 30, isStudent: true }; // An object with properties
let arr: Array<number> = [1, 2, 3, 4, 5]; // An array of numbers
let tuple: [string, number] = ["John", 25]; // A tuple with a string and a number
let func: Function = () => { console.log("Hello"); }; // A function
enum Color { Red, Green, Blue }
let color: Color = Color.Green; // An enum value
```

**Key points to remember:**

* TypeScript is a statically typed language, so you need to explicitly specify the type of variables or values.
* You can use type inference to let TypeScript infer the type based on the initial value.
* You can define custom types using interfaces or classes.

By understanding the built-in data types in TypeScript, you can write more robust, maintainable, and expressive code.

## User-Defined data type:

### Union Data Types in TypeScript

**Union data types** in TypeScript allow you to specify that a variable can hold values of multiple types. This provides flexibility when dealing with situations where a value might belong to one of several possible types.

**Syntax:**

```typescript
type UnionType = Type1 | Type2 | ... | TypeN;
```

where:

- `UnionType`: The name of the union type.
- `Type1`, `Type2`, ..., `TypeN`: The individual types that can be represented by the union type.

**Example:**

```typescript
type NumericOrString = number | string;

let value: NumericOrString;

value = 42; // Valid
value = "Hello"; // Valid
// value = true; // Invalid (not a number or string)
```

In this example, `NumericOrString` is a union type that can represent either a number or a string. The `value` variable can be assigned values of either type.

**Key points about union types:**

- **Type narrowing:** TypeScript's type system can perform type narrowing based on the context. For example, if you have a union type `number | string` and you know that a value of that type is actually a number, TypeScript can infer the more specific type within the context.
- **Conditional types:** TypeScript supports conditional types, which allow you to create more complex union types based on conditions.
- **Intersection types:** Intersection types combine the properties of multiple types, creating a new type that has all the properties of the combined types.

**Example using conditional types:**

```typescript
type Nullable<T> = T | null;

type NullableNumber = Nullable<number>;

let maybeNumber: NullableNumber = null;
maybeNumber = 42;
```

**Example using intersection types:**

```typescript
interface Person {
  name: string;
}

interface Employee {
  salary: number;
}

type PersonAndEmployee = Person & Employee;

let employee: PersonAndEmployee = {
  name: "Alice",
  salary: 50000
};
```

Union types are a powerful feature in TypeScript that can help you write more flexible and expressive code. By understanding how to use union types effectively, you can create more adaptable and maintainable applications.

### Array Data Type in TypeScript

**Arrays** in TypeScript are ordered collections of elements. They can hold elements of the same type or a union of types.

**Syntax:**

```typescript
let arrayName: Type[] = [element1, element2, ...];
```

where:

- `arrayName`: The name of the array.
- `Type`: The type of elements in the array.
- `element1`, `element2`, ...: The initial elements of the array.

**Example:**

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["apple", "banana", "orange"];
let mixed: (number | string)[] = [1, "hello", 3.14, "world"];
```

**Accessing Elements:**

You can access elements of an array using their index, which starts from 0.

```typescript
let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: "apple"
```

**Modifying Elements:**

You can modify elements of an array by assigning new values to their corresponding indices.

```typescript
fruits[1] = "grape";
console.log(fruits); // Output: ["apple", "grape", "orange"]
```

**Array Methods:**

TypeScript provides various methods for working with arrays, including:

- **`push()`**: Adds elements to the end of an array.
- **`pop()`**: Removes the last element from an array and returns it.
- **`shift()`**: Removes the first element from an array and returns it.
- **`unshift()`**: Adds elements to the beginning of an array.
- **`slice()`**: Creates a new array containing a portion of the original array.
- **`splice()`**: Removes or replaces elements in an array.
- **`join()`**: Joins the elements of an array into a string.
- **`forEach()`**: Iterates over each element in the array and performs an action.
- **`map()`**: Creates a new array by applying a function to each element of the original array.
- **`filter()`**: Creates a new array containing elements that meet a certain condition.
- **`reduce()`**: Applies a function to each element of the array to reduce it to a single value.

**Example using array methods:**

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];

// Push elements to the end
numbers.push(6, 7);

// Remove the last element
let lastElement = numbers.pop();

// Join elements into a string
let joinedNumbers = numbers.join(", ");

// Map elements to their squares
let squaredNumbers = numbers.map((num) => num * num);

console.log(numbers);
console.log(lastElement);
console.log(joinedNumbers);
console.log(squaredNumbers);
```

By understanding the array data type and its methods, you can effectively work with collections of elements in your TypeScript applications.

### Tuple Data Type in TypeScript

**Tuples** in TypeScript are fixed-length arrays with elements of specific types. They provide a way to define a sequence of values with predetermined types, making your code more type-safe and readable.

**Syntax:**

```typescript
let tupleName: [Type1, Type2, ...] = [value1, value2, ...];
```

where:

- `tupleName`: The name of the tuple.
- `Type1`, `Type2`, ...: The types of the elements in the tuple.
- `value1`, `value2`, ...: The initial values of the elements in the tuple.

**Example:**

```typescript
let person: [string, number] = ["Alice", 30];
```

In this example, `person` is a tuple with two elements: a string representing the name and a number representing the age.

**Accessing Elements:**

You can access elements of a tuple using their index, just like with arrays.

```typescript
console.log(person[0]); // Output: "Alice"
console.log(person[1]); // Output: 30
```

**Modifying Elements:**

You can modify elements of a tuple by assigning new values to their corresponding indices. However, you cannot change the length of a tuple after it's created.

```typescript
person[1] = 31;
console.log(person); // Output: ["Alice", 31]
```

**Key Points:**

- Tuples are useful for representing fixed-length sequences of values with specific types.
- Tuples are more specific than arrays, which can contain elements of any type.
- Once a tuple is created, its length cannot be changed.

**Example with mixed types:**

```typescript
let mixedTuple: [string, number, boolean] = ["Bob", 25, true];
```

**Example with optional elements:**

```typescript
let optionalTuple: [string, number?] = ["Charlie"]; // Optional second element
```

By using tuples in your TypeScript code, you can improve type safety and readability, especially when working with fixed-length sequences of values.
