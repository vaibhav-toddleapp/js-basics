// if else statements
// const age = prompt("Enter your age");
// console.log(typeof age);
// if (age >= 18 || age === 5) {
//   console.log("You are eligible to vote");
// } else {
//   console.log("You are not eligible to vote");
// }

// nested if else, check if person is eligible to vote and drive
// const personAge = prompt("Enter your age");
// if (personAge >= 18) {
//   if(personAge >= 21) {
//     console.log("You can drive cars and vote");
//   }
//   else {
//     console.log("You can vote but not drive");
//   }
// } else {
//   if (personAge >= 16) {
//     console.log("You can drive only with a guardian");
//   } else {
//     console.log("You are not eligible to vote or drive");
//   }
// }

// // if else if else statements, check if person is eligible to vote and drive
// const personAge = prompt("Enter your age");
// if (personAge >= 21) {
//   console.log("You can drive cars and vote");
// } else if (personAge >= 18) {
//   console.log("You can vote but not drive");
// } else if (personAge >= 16) {
//   console.log("You can drive only with a guardian");
// } else {
//   console.log("You are not eligible to vote or drive");
// }

// ------------------------------------------------------

// // For loop to loop through the array:
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
  { type: "Audi", year: 2018 },
  { type: "Mercedes", year: 2019 },
];
let i = 0;

// console.log("*");
// console.log("**");
// console.log("***");
// console.log("****");

var str = "";
for (let i = 1; i < 5; i++) {
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
  str = "";
}
//let i = 0;
// while(i < cars.length) {
//   console.log("IN DO WHILE:: Car at index:" + i, cars[i]);
//   i = i + 1;
// } ; // 0 < 5, 1 < 5, 2 < 5, 3 < 5, 4 < 5, 5 < 5

// // For in loop to loop through the array/object, it will return the index:

// for (const i in cars[0]) {
//   console.log(i);
// }
// // Output: type, year

// // For of loop to loop through the array/object, it will return the value:
// for (const i of cars[0]) {
//   console.log(i);
// }
// // Output: Volvo, 2016

// // Practice: Assume we have array of models: ["sedan", "suv", "coupe" ],
// // how do we assign each model to a car object in the cars array?
// // Hint: assign first element to first object. second element to second object and so on.
