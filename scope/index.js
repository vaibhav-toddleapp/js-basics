
// 1. let
// let a = 10;
// console.log(a); // 10
// function test() {
//     let a = 20;
//     console.log(a); // 20
// }
// console.log(a); // 10


// 2. const
// const b = 10;
// console.log(b); // 10
// function test() {
//     const b = 20;
//     console.log(b); // 20
// }
// console.log(b); // 10
// b = 20; // TypeError: Assignment to constant variable.


// 3. var
// var c = 10;
// console.log(c); // 10
// function test() {
//     var c = 20;
//     console.log(c); // 20
// }
// console.log(c); // 10
// c = 20;
// console.log(c); // 20

// hoisting
// console.log(d); // undefined
// var d = 10;
// console.log(d); // 10

// console.log(e); // ReferenceError: Cannot access 'e' before initialization
// let e = 10;
// console.log(e); // 10

// console.log(f); // ReferenceError: Cannot access 'f' before initialization
// const f = 10;
// console.log(f); // 10

// Tell the output of the following code snippets:

// for(let i = 0; i <= 5; i++) {}
// console.log(i);

// for(var i = 0; i <= 5; i++) {}
// console.log(i);

// ----------------------------------------------

// What will be the output of the following code?
// var a = 10;
// function myFunction() {
//   var a = 1;
//   console.log(a);
// }
// myFunction();
// console.log(a);
