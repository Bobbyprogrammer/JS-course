const users = [
  { id: 1, name: "Babar" },
  { id: 2, name: "Depak" },
  { id: 3, name: "Akshay" },
];

const user = users.find((user) => user.id === 2);

console.log(user);
