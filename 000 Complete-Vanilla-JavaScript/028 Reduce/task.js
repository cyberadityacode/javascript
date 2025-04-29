/*Task: Get the names of products that are in stock 
    and cost more than ₹1000, 
    with prices shown in ₹INR (instead of $) */
//

const products = [
  { name: "Laptop", priceUSD: 1000, inStock: true },
  { name: "Phone", priceUSD: 600, inStock: false },
  { name: "Tablet", priceUSD: 800, inStock: true },
  { name: "Monitor", priceUSD: 1200, inStock: true },
];

const exchangeRate = 83;
const stockProduct = products
  .map((product) => ({
    ...product,
    priceINR: product.priceUSD * exchangeRate,
  }))
  .filter((product) => product.inStock && product.priceINR >= 1000)
  .map((product) => `${product.name} - ₹ ${product.priceINR}`);

console.log(stockProduct);

/* Task: Get the names of students who passed 
and assign them a status message */
/* Requirements:
A student passes if their marks are >= 50.

Return an array of strings in the format:
"Aarav has passed with 92 marks".
 */
const students = [
  { name: "Aarav", marks: 92 },
  { name: "Ishita", marks: 47 },
  { name: "Kabir", marks: 76 },
  { name: "Meera", marks: 33 },
  { name: "Dev", marks: 88 },
];

const passStudent = students
  .map((student) => ({ ...student, passed: student.marks >= 50 }))
  .filter((passStudent) => passStudent.passed == true).map(
    (msg)=> `${msg.name} has passed with ${msg.marks}`
  );


// Task: Filter and Format Employee Salaries

/* Filter out the employees who earn at least ₹50,000.

Then format their names and salaries into readable strings like:

"Priya earns ₹65000"
"Meena earns ₹75000" */

const employees = [
    { name: "Priya", salary: 65000 },
    { name: "Rohan", salary: 48000 },
    { name: "Meena", salary: 75000 },
    { name: "Arjun", salary: 52000 },
    { name: "Sana", salary: 45000 },
  ];
/* 
const empSal50k = employees.filter(emp=>
    emp.salary>=50000
).map(emp => `${emp.name} earns ₹${emp.salary}`) */

//salary in descending order
/* const empSal50k = employees.filter(emp=>
    emp.salary>=50000
).sort((a,b)=> b.salary - a.salary)
.map(emp => `${emp.name} earns ₹${emp.salary}`)
 *///salary in descending order
 

//salary in ascending order
const empSal50k = employees.filter(emp=>
    emp.salary>=50000
).sort((a,b)=> a.salary - b.salary)
.map(emp => `${emp.name} earns ₹${emp.salary}`)