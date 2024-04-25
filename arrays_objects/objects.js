const person = {
  name: "John",
  age: 25,
  isStudent: true,
};
console.log("Person: ", person, typeof person);

// // Get the value of the name property
// console.log("Name: ", person.name, person["name"]);

// // Set the value of favoriteColor property
// person.favoriteColor = "Blue"; // Can be done as well using person["favoriteColor"] = "Blue";
// console.log("Person: ", person.favoriteColor);

// // Delete the age property
// delete person.age;
// console.log("Person: ", person.age); // undefined

// // Check if the property exists
// console.log("Name exists: ", "name" in person, "favoriteCars" in person); // true, false

// // Nested objects
// const person2 = {
//   name: "John",
//   age: 25,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// console.log("Person2: ", person2, typeof person2);

// // Access the nested object
// console.log("City: ", person2.address.city);

// // Add a new property to the nested object
// person2.address.street = "5th Avenue";

// // console.log("What should be the output here?:", person2.favoriteCar.color);

// // Show difference between deep and shallow copy
// const person3 = person2;
// person3.name = "Jane";
// console.log("Person2: ", person2.name, "Person3:", person3.name); // Jane, Jane
// // console.log(
// //   "Are they the same object?:",
// //   person2 == person3,
// //   person2 === person3
// // );

// const person4 = {
//   ...person2,
//   favoriteCar: { model: "volvo", color: "blue" },
//   age: 30,
// };
// person4.name = "Alice";
// console.log("Person2: ", person2, "person4:", person4);

// // Object methods, Also refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object
// console.log("Keys: ", Object.toString(person4));
// console.log("Keys: ", Object.keys(person4));
// console.log("Values: ", Object.values(person4));
// console.log("Entries: ", Object.entries(person4));