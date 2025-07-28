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

