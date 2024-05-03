// if else statements
const age = prompt("Enter your age");
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

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

// if else if else statements, check if person is eligible to vote and drive
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
// const cars = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "BMW", year: 2010 },
// ];

// for (let i = 0; i < cars.length; i++) {
//   console.log("Car at index:" + i, cars[i]);
// }

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
