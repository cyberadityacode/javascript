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


