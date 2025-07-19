###  What is TDZ (Temporal Dead Zone) in JavaScript?

**TDZ** stands for **Temporal Dead Zone** — it's the time between when a `let` or `const` variable is **hoisted** and when it is **actually declared in the code**. During this time, you **cannot access** the variable — if you try, JavaScript throws a **ReferenceError**.

---

###  Simple Definition

> A variable declared with `let` or `const` is hoisted to the top of its block, but **cannot be used** until the **line where it's declared is reached**.

This is the **TDZ** — the variable exists but is **not yet initialized**.

---

###  How to See TDZ Live (Example)

Open your browser's **console** (right-click > Inspect > Console tab), then run:

```javascript
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 10;
```

Or with `const`:

```javascript
console.log(b); // ❌ ReferenceError
const b = 5;
```

---

###  Correct Way (no TDZ violation)

```javascript
let x = 20;
console.log(x); // ✅ 20
```

---

###  Why Does TDZ Exist?

It helps prevent bugs by making sure you **don't use variables before they are declared**, especially in modern block-scoped code.

---

###  Another Example with Blocks

```javascript
{
  console.log(name); // ❌ ReferenceError (TDZ)
  let name = "Alice";
}
```

Even though the `let name` is in the same block, it’s **not safe to use until after the declaration line**.

---

###  Advanced Tip

You can even trigger TDZ inside `typeof`, which normally doesn’t throw errors:

```javascript
typeof someVar; // ✅ undefined
typeof foo;     // ❌ ReferenceError (if foo is in TDZ)

let foo = "bar";
```

---

###  Summary

| Keyword | Hoisted | In TDZ? | Can Use Before Declared?         |
| ------- | ------- | ------- | -------------------------------- |
| `var`   | ✅ Yes   | ❌ No    | ✅ Yes (but value is `undefined`) |
| `let`   | ✅ Yes   | ✅ Yes   | ❌ No (ReferenceError)            |
| `const` | ✅ Yes   | ✅ Yes   | ❌ No (ReferenceError)            |

