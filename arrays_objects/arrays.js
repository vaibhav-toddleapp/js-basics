// Give examples of what array is in JavaScript and its usage.

// Arrays are used to store multiple values in a single variable.

// An array is a special variable, which can hold more than one value at a time.
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
// var car1 = "Saab";
// var car2 = "Volvo";
// var car3 = "BMW";

// However, what if you want to go through all the cars and find a specific one? 
// And what if you had not 3 cars, but 300?
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
  { type: "Volvo", year: 2016, color: "red"},
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010, model: "X5" },
  { type: "Audi", year: 2018 }
];

// You can access the array items by referring to the index number:
// console.log(cars[0]); // { type: 'Volvo', year: 2016 }
// console.log(cars[1]); // { type: 'Saab', year: 2001 }
// console.log(cars[2]); // { type: 'BMW', year: 2010 }

// You can also change an array element by accessing the index number: add new car object

// You can get total number of elements using length property
//console.log(cars.length);

// You can loop through the array elements using for loop
for(var i = 0; i < cars.length; i = i + 1) {
  // Object.keys(cars[i]) => ["type", "color", "year"]

}
const object1 = {
  "firstName":"sumit",
  "lastName":"ghosh",
  "website":"geeksforgeeks"
};

// // The length property provides an easy way to append a new element to an array:
cars[cars.length] = "Mercedes";
console.log(cars[3]); // Mercedes

// // Difference between shallow and deep copy of an array
// // Shallow copy
// console.log("BEFORE:", cars[0]);
// var shallowCopy = cars;
// shallowCopy[0] = "Audi";
// console.log("AFter:",cars[0], shallowCopy[0]); // Audi, Audi

// // Deep copy
// var deepCopy = [...cars];
// deepCopy[0] = "Tesla";
// console.log(cars[0], deepCopy[0]); // Audi, Tesla

var deepper = [{type: "Tesla", year: 2020}, ...cars, {type: "Ford", year: 2019}];

const manyDeep = [...cars, ...deepper]; // 
console.log(manyDeep);

cars[cars.length + 5] = "data";

// // Array Methods

// 1. push()
// The push() method adds new items to the "end" of an array, and returns the new length.
var fruits = ["Banana", "Orange", "Apple"];
fruits.unshift("Mango");
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]

// // 2. pop()
// // The pop() method removes the "last element" from an array, and returns that element.
// var fruits = ["Banana", "Orange", "Apple"];
// fruits.pop();
// console.log(fruits); // ["Banana", "Orange"]

// // You can use shift() and unshift() methods to add and remove elements from the "beginning" of an array.

// // 3. map()
// // The map() method creates a new array by performing a function on each array element.
// var numbers = [4, 9, 16, 25, 10];

// const functionToProcess = (car, index) => {
//   return;
// };

// var x = numbers.map(functionToProcess);

console.log("NEW ARRAY:", x, "OLD ARRAY:", numbers);
// // 4. filter()
// // The filter() method creates a new array with array elements that pass a test.
// var numbers = [4, 9, 16, 25];
// var filtered = numbers.filter((number) => {
//   if(number > 10) return true;
//   else return false;
// });

// // 5. indexOf()
// // The indexOf() method searches the array for the specified item, and returns its position.
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var pos = fruits.indexOf("Apple");
// console.log(pos);

// // 6. find()
// // The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// var numbers = [4, 9, 16, 25];
// var found = numbers.find((number) => number > 10);


// // 7. slice()
// // The slice() method slices out a piece of an array into a new array.
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1, 3);
// console.log(citrus);

// Also refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array for more methods