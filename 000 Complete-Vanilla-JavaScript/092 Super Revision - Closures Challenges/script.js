/* 
1. Write a function that returns a greeting message 
with a name, but only exposes a method to set the name 
once. In JS using closures
*/

function createGreeter() {
  let name = null; // initially unset

  return {
    setName: function (newName) {
      if (name === null) {
        name = newName;
        return true; //successfully set
      } else {
        return false; //name was already set
      }
    },

    greet: function () {
      if (name === null) {
        return "Hello, Guest!";
      }

      return `Hello, ${name}`;
    },
  };
}

// Usage

const greeter = createGreeter();
console.log(greeter.greet());
console.log(greeter.setName("aditya"));
console.log(greeter.greet());
console.log(greeter.setName("cyberaditya")); //false
console.log(greeter.greet()); //Hello aditya

/* Write a closure that returns a function to check 
if a number is even or odd */

function evenOrOddChecker() {
  return function (number) {
    if (typeof number !== "number") {
      return "Input must be a number";
    }
    return number % 2 === 0 ? "Even" : "Odd";
  };
}

// Usage

const checkEvenOrOdd = evenOrOddChecker();
console.log(checkEvenOrOdd(4)); //Even
console.log(checkEvenOrOdd(7)); //Odd
console.log(checkEvenOrOdd("aditya")); //Input must be a number
