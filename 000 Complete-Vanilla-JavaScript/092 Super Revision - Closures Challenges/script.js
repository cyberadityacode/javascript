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
