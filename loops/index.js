// For loop to loop through the array:
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

for (let i = 0; i < cars.length; i++) {
  console.log("Car at index:" + i, cars[i]);
}

// For in loop to loop through the array/object, it will return the index:

for (const i in cars[0]) {
  console.log(i);
}
// Output: type, year

// For of loop to loop through the array/object, it will return the value:
for (const i of cars[0]) {
  console.log(i);
}
// Output: Volvo, 2016

// Practice: Assume we have array of models: ["sedan", "suv", "coupe" ],
// how do we assign each model to a car object in the cars array?
// Hint: assign first element to first object. second element to second object and so on.