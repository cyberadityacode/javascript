console.log("Super Revision this keyword");

// 1.1 Global Context

console.log(this); //window object

// 1.2 Function Context (non-strict vs strict mode)

function sayHello() {
  //   "use strict";
  console.log(this);
}

sayHello(); //in browser: window in NON STRICT mode
/* If, I use strict mode, than it will return undefined */

// 1.3 Object Method Context - Here this refers to user

const user = {
  name: "aditya",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

user.greet(); //Hello, aditya

// 1.4 Losing this – the classic trap

const anotherUser = {
  name: "dc",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

// anotherUser.greet();
const greetFn = user.greet; //When you extract the function, it loses its context!
// console.log(greetFn);
greetFn();

// https://chatgpt.com/c/687a90af-b3e4-8009-93e2-f8e9872eb025
