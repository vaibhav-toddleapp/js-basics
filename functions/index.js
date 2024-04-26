// Give examples of what functions is in JavaScript and its usage.

// 1. Function Declaration
function greet() {
  return "Hello World!";
}
console.log(greet());

// with few arguments and return value
// function add(a, b) {
//   return a + b;
// }
// console.log(add(10, 2));

// // 2. Arrow Function
// const greet = () => "Hello World!";
// console.log(greet());

// // 3. Function Closures
// function outerFunction(outerVariable) {
//   return function innerFunction(innerVariable) {
//     return outerVariable * innerVariable;
//   };
// }

// const newFunction = outerFunction(10);
// console.log(newFunction(5)); // Output: 15

// // 4. Function Recursion
// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(5)); // Output: 120

// // 5. Function Rest Parameters
// function sum(...args) {
//   return args.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4)); // Output: 10

// // 6. Function Default Parameters
// function multiply(a, b = 2) {
//   return a * b;
// }

// console.log(multiply(5)); // Output: 10

// // 7. Function Destructuring Parameters
// function printUserId({ id }) {
//   console.log(id);
// }

// const user = { id: 42, name: "John" };
// printUserId(user); // Output: 42

// // 8. Function Callbacks
// function greeting(name) {
//   alert("Hello " + name);
// }

// function processUserInput(callback) {
//   var name = prompt("Please enter your name.");
//   callback(name);
// }

// processUserInput(greeting);

// 9. Function Scope

// What will be the output of the following code?
// var a = 10;
// function myFunction() {
//   var a = 1;
//   console.log(a);
// }

// console.log(a);
