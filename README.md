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
