//  Step 1: Understand this
// In JavaScript, this is like saying "who is speaking right now."

function greet(age) {
  console.log(`Hi, I am ${this.name} and I am ${age} year old `);
}

// greet(); //This function doesn't know who this is yet.

//  Step 2: Create an Actor (an object)

const person = { name: "Aditya" };
// This is your actor — it has a name, but it doesn’t know how to greet anyone yet.

//  Step 3: Give the Script to the Actor with .call()

greet.call(person, 32);

// “Hey person, please run the greet function, and pretend that this refers to you.”

//“Hey person, perform the greet script as yourself and say you’re 32.”

/* 
Think of .call() like giving someone a speech and saying:

"Read this speech as if you're the president, not yourself."

You're temporarily assigning a role (object) to a script (function).
*/

/* 
Real-World Use Cases of call method 
*/
// 1. Borrowing a Method from One Object to Another

// You have an object with a method, and you want to use that method for another object without copying the method.

const person1 = {
  name: "alpha",
  greet(age) {
    console.log(`Hi, I am ${this.name}, age ${age}`);
  },
};

const person2 = {
  name: "beta",
};
// Borrow `greet` from person1 using `call`

person1.greet.call(person2, 10);

/* 
 Use Case: Sharing a common method across different users or objects without duplicating code.
*/

// 2. Converting Array-like Objects
/* 
In older JavaScript or vanilla environments (e.g., browsers),
 when you get something like an arguments object or NodeList,
  it’s not a real array — 
but you want to use array methods on it.
*/

function printArgs() {
  const argsArray = Array.prototype.slice.call(arguments);
  console.log(argsArray);
}

// Modern Alternative (ES6+):
// You can do the same thing much more cleanly with the rest parameter syntax:

function printArgsModern(...argsArray) {
  console.log(argsArray);
}
/* 
Rest: like a rest stop — it gathers everything remaining.

Spread: like spreading butter — it spreads values out.

*/
// debugger
printArgs("a", "b", "c", "d");
printArgsModern("a", "b", "c", "d");

// Calling Functions Dynamically with Context
/* 
In event-based or callback-driven code, 
you may have a shared handler that you want to run in the context of 
different objects.
*/

const logger = {
  log() {
    console.log(`${this.label}: ${this.message}`);
  },
};

const error = { label: "Error", message: "Something went wrong" };
const info = { label: "Info", message: "All Good" };

logger.log.call(error); // Error:Something went wrong
logger.log.call(info); // Info:All Good

/* 
Use Case: Logging, debugging, or handling events in different object contexts using a shared function.

*/

// https://chatgpt.com/c/687a90af-b3e4-8009-93e2-f8e9872eb025
