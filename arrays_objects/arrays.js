// Give examples of what array is in JavaScript and its usage.

// Arrays are used to store multiple values in a single variable.

// An array is a special variable, which can hold more than one value at a time.
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
// var car1 = "Saab";
// var car2 = "Volvo";
// var car3 = "BMW";

// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?
// The solution is an array!

// An array can hold many values under a single name, and you can access the values by referring to an index number.
// You create an array like this:
// var cars = ["Saab", "Volvo", "BMW"];

// In JavaScript, arrays use numbered indexes. Array indexes start with 0.
// You can have objects in an Array.
// var cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];

var cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

// You can access the array items by referring to the index number:
console.log(cars[0]); // { type: 'Volvo', year: 2016 }
console.log(cars[1]); // { type: 'Saab', year: 2001 }
console.log(cars[2]); // { type: 'BMW', year: 2010 }

// You can also change an array element by accessing the index number: add new car object
// cars[0] = "Toyota";
// console.log(cars[0]); // Toyota

// // The length property provides an easy way to append a new element to an array:
// cars[cars.length] = "Mercedes";
// console.log(cars[3]); // Mercedes

// // Difference between shallow and deep copy of an array
// // Shallow copy
// var shallowCopy = cars;
// shallowCopy[0] = "Audi";
// console.log(cars[0], shallowCopy[0]); // Audi, Audi

// // Deep copy
// var deepCopy = [...cars];
// deepCopy[0] = "Tesla";
// console.log(cars[0], deepCopy[0]); // Audi, Tesla

// // Array Methods

// // 1. push()
// // The push() method adds new items to the "end" of an array, and returns the new length.
// var fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Mango");
// console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]

// // 2. pop()
// // The pop() method removes the "last element" from an array, and returns that element.
// var fruits = ["Banana", "Orange", "Apple"];
// fruits.pop();
// console.log(fruits); // ["Banana", "Orange"]

// // You can use shift() and unshift() methods to add and remove elements from the "beginning" of an array.

// // 3. map()
// // The map() method creates a new array by performing a function on each array element.
// var numbers = [4, 9, 16, 25];
// var x = numbers.map((number, index) => {
//   console.log("Value at:" + index, number);
// });

// // 4. filter()
// // The filter() method creates a new array with array elements that pass a test.
// var numbers = [4, 9, 16, 25];
// var filtered = numbers.filter((number) => number % 2 === 0);

// Also refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array for more methods