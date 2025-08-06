# this Keyword

This is a key concept that differentiates average JS developers from expert-level ones. Let’s go deep into it.

## Part 1: Understanding this in JavaScript

this is a keyword in JavaScript that refers to the context in which a function is called.
- 1.1 Global Context
- 1.2 Function Context (non-strict vs strict mode)
- 1.3 Object Method Context

<!-- Classic Trap of this  -->

**common JavaScript "gotcha"** related to `this` and how function context works.

---

###  Why `greetFn()` prints `undefined`

Let's break it down:

```js
const greetFn = user.greet;
greetFn();
```

When you assign `user.greet` to `greetFn`, you're **not calling** the method — you're just storing a reference to the function.

But here's the catch: When `greetFn()` is called, it's invoked **without an object context**, so `this` inside `greet()` becomes `undefined` (in strict mode) or the global object (in non-strict mode).

```js
// This is roughly what it turns into:
function greet() {
  console.log(`Hello, ${this.name}`);
}
greet(); // this is undefined
```

So `this.name` becomes `undefined`.

---

###  How to Fix It

Here are a few options:

---

#### 1. **Bind the function** to the original object:

```js
const greetFn = user.greet.bind(user);
greetFn(); //  Hello, Aditya
```

`bind(user)` returns a new function with `this` bound to `user`.

---

#### 2. **Call the function in the correct context**

Instead of extracting the method:

```js
user.greet(); //  Hello, Aditya
```

---

#### 3. **Use an arrow function wrapper** (if capturing `this` elsewhere)

```js
const greetFn = () => user.greet();
greetFn(); //  Hello, Aditya
```

This works, but be cautious: it calls `user.greet()` fresh each time, so if `user` changes, behavior might change too.

---

### Summary

When you extract a method from an object and call it standalone, you **lose the `this` binding** unless you explicitly bind it.
