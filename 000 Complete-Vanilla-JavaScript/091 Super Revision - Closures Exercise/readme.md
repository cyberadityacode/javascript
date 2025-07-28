# Exercise 2

## Step-by-Step Explanation:

var is function-scoped, not block-scoped.
That means there's only one i variable shared across all iterations of the loop.

setTimeout(() => console.log(i), 100) sets a delayed task to run after 100 milliseconds.

By the time those delayed functions run (after the loop has already finished), the loop has already completed and i has become 3.

So, each of the setTimeout functions sees the same i, which is now 3.

| Time  | Loop                     | i Value                       | What happens                         |
| ----- | ------------------------ | ----------------------------- | ------------------------------------ |
| 0ms   | 1st iteration            | i = 0                         | Schedules `console.log(i)` for later |
| 0ms   | 2nd iteration            | i = 1                         | Schedules another `console.log(i)`   |
| 0ms   | 3rd iteration            | i = 2                         | Schedules another `console.log(i)`   |
| 0ms   | Loop ends                | i = 3                         |                                      |
| 100ms | All `console.log(i)` run | `i` is now 3 → prints `3 3 3` |                                      |

---

## 3- Exercise : Function Factory

A Function Factory is a function that returns another function, often with some pre-configured behavior or data. 

It's a way to generate multiple customized functions from a common blueprint.

Let's break down the code **step by step** to understand what it does.

---

### **1. Function Declaration: `multiplier(factor)`**

```javascript
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
```

* This is a **function factory** — a function that creates and returns another function.
* It takes a single argument called `factor`.
* Inside it, it returns a new **anonymous function** that takes another argument `number`.
* That inner function multiplies `number` by `factor` and returns the result.

#### Example:

If you call `multiplier(2)`, it will return a new function like this:

```javascript
function (number) {
  return number * 2;
}
```

---

### **2. Using the Factory: `const double = multiplier(2);`**

```javascript
const double = multiplier(2);
```

* Here, we are calling `multiplier(2)`.
* As explained, this returns a new function that multiplies a number by 2.
* That returned function is stored in the variable `double`.

So now:

```javascript
double(3) // means: 3 * 2 => 6
```

---

### **3. Outputting the Result**

```javascript
console.log("Function Factory Example: ", double(3));
```

* Calls the `double` function with argument `3`.
* `double(3)` → `3 * 2` → `6`
* Logs:

```
Function Factory Example: 6
```

---

###  **Summary**

* You created a **function factory** with `multiplier`.
* You used it to create a **custom multiplier function**: `double`.
* Then, you called that new function with a number and logged the result.

---


## 3.  Private Variables using Closures



