/* 
A closure is formed when:

An inner function remembers the variables of its outer function 
even after the outer function has returned.
*/

function outer() {
  let name = "aditya";
  return function inner() {
    console.log(name); //it retains access to the name
  };
}

const greet = outer();
greet();

/* 
2. Practical Advanced Closure Patterns
*/
// A. Closure in Loops: Common Interview Trap!

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
//Output  333

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
//Output  012
/* 
var is function scoped and let is block scoped read - readme.md for further details
*/

// Fix using Closure:

for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 100);
  })(i);
}
//output 012 - we have used IIFE

// B. Function Factory Pattern

/* 
Refer: readme.md for detailed explaination
*/

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log("Function Factory Example: ", double(3)); // 6 - refer readme.md

// 3.  Private Variables using Closures
/* 

*/

function createCounter() {
  let count = 0; //private variable

  return {
    increment() {
      count++;
      console.log("Increment function inside createCounter: ", count);
    },
    decrement() {
      count--;
      console.log("Decrement function inside createCounter: ", count);
    },
    get() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.decrement();
console.log("Get Counter of createCounter: ", counter.get());

/* 4.  Module Pattern (Closures + IIFE) */
//

const AuthModule = (function () {
  let token = null; //private

  function login(user, pass) {
    if (user === "admin" && pass === "123") {
      token = "abcdef";
      console.log("Login Successfull");
    } else {
      console.log("Access Denied");
    }
  }

  function getToken() {
    return token;
  }

  return {
    login,
    getToken,
  };
})();

AuthModule.login("admin", "123"); 
console.log(AuthModule.getToken()); // abcdef

console.log(AuthModule.token); //undefined
