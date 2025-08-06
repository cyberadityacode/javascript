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

/* 
3 Implement a function memoize(fn) that caches the result of fn.
*/

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
/* 
How It Works:
1. cache is a Map used to store function results.

2. The arguments are serialized using JSON.stringify to create a unique key for each set of arguments.

3. If the result for the given arguments is already in the cache, it is returned directly.

4. Otherwise, it computes the result, stores it in the cache, and returns it.
*/

const slowSquare = (n) => {
  console.log(`Calculating square of ${n}`);
  return n * n;
};

const memoizedSquare = memoize(slowSquare);

console.log(memoizedSquare(4)); // Logs: Calculating square of 4 → 16
console.log(memoizedSquare(4)); // Logs: nothing → 16 (from cache)

// Revise one more time: how memoize function works

/* 
4. Create a rateLimiter(fn, limit) that allows a function to be called only limit times. 
*/

function rateLimiter(fn, limit) {
  let count = 0;

  return function (...args) {
    if (count < limit) {
      count++;
      // return fn.apply(this, args);
      return fn(...args);
    } else {
      console.warn("Rate Limit Exceeded");
      return undefined;
    }
  };
}

// example usage
function sayHello(name) {
  console.log(`Hello, ${name}`);
}

const limitedHello = rateLimiter(sayHello, 3);

limitedHello("shambhu");
limitedHello("shankar");
limitedHello("mahadev");
limitedHello("bholenath");

/* 
Simulate a private bank account using closures. Implement deposit, withdraw, and balance.
*/

function createBankAccount(initialBalance = 0) {
  let balance = initialBalance; //private variable

  return {
    deposit(amount) {
      if (amount < 0) {
        console.warn("Deposit must be greater than zero");
        return;
      }
      balance += amount;
      console.log(`Deposited : $${amount}`);
    },

    withdraw(amount) {
      if (amount <= 0) {
        console.warn("Withdraw must be greater than zero");
        return;
      }
      if (amount > balance) {
        console.warn("Insufficient Funds");
        return;
      }
      balance -= amount;
      console.log(`Withdrew: $${amount}`);
    },
    balance() {
      console.log(`Current Balance : $${balance}`);
    },
  };
}

const myAccount = createBankAccount(1000);
myAccount.deposit(77);
myAccount.balance();
myAccount.deposit(3);

myAccount.balance();
myAccount.withdraw(3);
myAccount.balance();
