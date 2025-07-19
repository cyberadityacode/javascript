/* 
 A closure is the combination of a function and 
 the lexical environment within which that function was declared.
 Functions remember the variables of the outer scope 
 even after the outer function has finished execution.
*/

function outer() {
  let name = "aditya";
  function inner() {
    console.log("Hello ", name);
  }
  return inner;
}

const greet = outer();
greet();

/* 
inner closes over the variable name.

This is a closure: greet() still accesses name even after outer() is done.


*/

/* 
Exercise 1: Counter using Closure
 Create a counter that remembers its value:
*/

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter();
counter();
counter();
// The inner function keeps count alive between calls!

// Common Mistake: Loop + Closure

for (var i = 0; i < 3; i++) {
  //var global scope
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

for (let i = 0; i < 3; i++) {
  //let block scope
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
/* 
let creates block scope, preserving each i value for each loop iteration (each closure gets its own i).
*/

console.log("---------");

// Exercise 2: Closure in Loops
/* 
Create a function makeTimers() that returns an array of 3 functions.
 Each function should log 0, 1, or 2.
*/

function makeTimers() {
  let timers = [];

  for (let i = 0; i < 3; i++) {
    timers.push(function () {
      console.log("Timer:", i);
    });
  }
  return timers;
}

console.log(makeTimers());

const [t0, t1, t2] = makeTimers();
t0();
t1();
t2();

console.log("------------------");
// Closures for Data Privacy

function secretHolder() {
  let secret = "Shhh..";

  return {
    getSecret: () => secret,
    setSecret: (value) => (secret = value),
  };
}

const shh = secretHolder();
console.log(shh);
console.log(shh.getSecret());
shh.setSecret("Jai Mata Di");
console.log(shh.getSecret());

console.log("..................");

// Advanced Example: Once Function
// Make a function that runs only once

function once(fn) {
  let done = false;
  let result;

  return function (...args) {
    if (!done) {
      result = fn.apply(this, args);
      done = true;
    }
    return result;
  };
}

const init = once(() => console.log("Init Done"));
init(); //init done
init(); // no output

// Build a multiplier function:

console.log("--------------");

const multiplyBy = (x) => (y) => x * y;
const triple = multiplyBy(3);
console.log(triple(4)); //12

console.log("---------------");

// Password Checker

function passwordChecker(initialPassword) {
  let password = initialPassword;

  return {
    changePassword: function (newPassword) {
      password = newPassword;
      console.log("Password Changed Successfully");
    },
    verifyPassword: function (inputPassword) {
      return inputPassword === password;
    },
  };
}

const checker = passwordChecker("secret123");

console.log(checker.verifyPassword("wrong123"));
console.log(checker.verifyPassword("secret123"));

checker.changePassword("newSecret");

console.log(checker.verifyPassword("secret123"));
console.log(checker.verifyPassword("newSecret"));

/* // Create a stopwatch function that returns:

start(), stop(), and getTime() */

function stopwatch() {
  let startTime = 0;
  let elapsed = 0;
  let running = false;

  return {
    start: function () {
      if (!running) {
        startTime = Date.now();
        running = true;
      }
    },
    stop: function () {
      if (running) {
        elapsed += Date.now() - startTime;
        running = false;
      }
    },
    getTime: function () {
      if (running) {
        return elapsed + (Date.now() - startTime);
      }
      return elapsed;
    },
  };
}

const watch = stopwatch();
watch.start();

setTimeout(() => {
  watch.stop();
  console.log("Time:", watch.getTime(), "ms");
}, 1000);
