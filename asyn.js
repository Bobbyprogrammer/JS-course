// synchronous code
// console.log("one");
// console.log("two");
// console.log("three");

// asynchronous

// console.log("Start");

// setTimeout(() => {
//   console.log("Inside time out");
// }, 2000);

// console.log("End");

// promises

// const promise = new Promise((resolve, reject) => {
//   const success = false;

//   if (success) {
//     resolve("Data  received");
//   } else {
//     reject("something went wrong");
//   }
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// API CALLING

// const getData = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData();
