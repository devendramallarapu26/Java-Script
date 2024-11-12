// Without object destructuring
const employee = { name: 'Gary', age: 28 };
const name = employee.name;
const age = employee.age;

// With object destructuring
const { name, age } = employee;
console.log(name); // Output: Gary
console.log(age);  // Output: 28
