// Global Scope

let appName = "ChatApp";
function startApp() {
  console.log(appName);
}
startApp();

// Function Scope

function loginUser() {
  let user = "Aditya";
  console.log(user);
}
// console.log(user);

// Block Scope Introduced in ES6
// let and const are block scoped

if (true) {
  let isLoggedIn = true;
}

// console.log(isLoggedIn);

// Lexical Scope (Static Scope)
/* Definition: Functions are executed using the scope 
in which they were defined, 
not where they are called. */

function outer() {
  let name = "Bob";
  function inner() {
    console.log(name); // Can access `name` from outer
  }
  inner();
}
outer();

// Module Scope (ES6 Modules)
/* When you use ES6 import/export, the variables and 
functions inside a module are scoped to that module only. */

const helper = {/*  */};
export default helper;