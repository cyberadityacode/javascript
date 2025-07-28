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


