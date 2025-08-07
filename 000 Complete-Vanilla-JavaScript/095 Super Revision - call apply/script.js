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


