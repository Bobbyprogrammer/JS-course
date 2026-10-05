// const user = {
//   name: "John",
//   age: 30,
//   email: "john@example.com",
//   address: {
//     street: "123 Main St",
//     city: "Mumbai",
//   },
// };

// user.name = "jane";
// console.log(user.address.city);

// console.log(user.name); // Output: John
// console.log(user.age); // Output: 30
// console.log(user.email); // Output: john@example.com

const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
];

const jane = users.find((user) => user.name === "Jane");
console.log(jane);
