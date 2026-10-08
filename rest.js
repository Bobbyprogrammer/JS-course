// Object destructuring
// const user = {
//   name: "Ali",
//   age: 22,
//   email: "ali@example.com",
// };
// const { name, age, email } = user;
// console.log(name);
// console.log(age);
// console.log(email);

// Array destructuring

// const skills = ["React", "Node", "MongoDB"];

// const [first, second, third] = skills;
// console.log(first);
// console.log(second);
// console.log(third);

// Spread operator
// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5, 6];
// console.log(numbers);
// console.log(newNumbers);

// Object spread
// const user = {
//   name: "Ali",
//   age: 22,
// };

// const updatedUser = { ...user, age: 23 };

// console.log(user);
// console.log(updatedUser);

//  Rest parameters
const calculateTotal = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};
console.log(calculateTotal(1, 2, 3, 4, 5)); // Output: 15
