const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
    // reject("error");
  }, 2000);
});

promise.then(
  (value) => {
    console.log(value); // Output: success
  },
  (error) => {
    console.log(error); // Output: error
  }
);

// -------------------------------------------------------------

// rewrite the above code using async/await syntax
async function asyncFunction() {
  try {
    // instead of using .then() and .catch() we use await and try/catch
    const value = await promise;
    console.log(value); // Output: success
  } catch (error) {
    console.log(error);
  }
}
asyncFunction();

// -------------------------------------------------------------

// Real-world example of fetching data from some test (working) API
async function fetchData() {
  try {
    const response = await fetch("https://reqres.in/api/users?delay=1");
    const data = await response.json();
    document.getElementById("data").innerHTML = JSON.stringify(data, null, 2);
  } catch (error) {
    console.log(error);
  }
}

fetchData();