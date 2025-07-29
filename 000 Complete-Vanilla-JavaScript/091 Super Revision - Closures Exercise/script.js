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

/* 
## 5. Memory Leak with Closures
*/

function createLargeClosure() {
  const largeArray = new Array(1000000).fill("leak"); // large memory allocation

  document
    .getElementById("leaky-btn")
    .addEventListener("click", function handler() {
      // This closure keeps 'largeArray' in memory
      console.log("Button clicked");
    });
}
createLargeClosure();

// Continue from Ex. 7  Q1. Create a once function that runs a function only once.

// Run only once

function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  };
}

function sayHello(name) {
  console.log(`Hello , ${name}`);
  return `Greeted ${name}`;
}

const greetOnce = once(sayHello);

greetOnce("aditya");
greetOnce("cyberaditya");

/* Ex. 8 */
// Simple Cache System Using Closure

function createCache() {
  const cache = {};

  return function (key, computeFn) {
    if (cache.hasOwnProperty(key)) {
      console.log("Fetching from cache:", key);
      return cache[key];
    } else {
      console.log("Computing and caching", key);
      const result = computeFn();
      cache[key] = result;
      return result;
    }
  };
}

// how to use cache function
const cachedFunction = createCache();

// First call, computes and stores in cache

const result1 = cachedFunction("square_5", () => 5 * 5);
console.log(result1);

// second time call with same key: retrieves from cache
const result2 = cachedFunction("square_5", () => 5 * 5);
console.log(result2); //25 from cache

// trying different key will invoke re-computation

const result3 = cachedFunction("square_6", () => 6 * 6);
console.log(result3);
