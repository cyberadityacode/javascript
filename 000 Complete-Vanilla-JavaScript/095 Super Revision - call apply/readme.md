# call, apply, bind

These methods let you manually control what this refers to.

# call

In JavaScript, .call() is a method that allows you to invoke a function with a specific this context and pass arguments individually.

Imagine you have a script (function), but no specific actor (object) assigned to perform it.

You want to give that script to a specific actor to perform it as if it’s their own lines.

That’s what .call() does — it lets you say:

- “Hey, Actor (object), here’s a script (function). Read it as if it’s about YOU (set this).”

## Summary

- .call() is a way to tell a function who this should be.

- You use it when you want a function to act on behalf of an object.

- You can also pass extra arguments to the function.

# real-world use cases of .call()

## What Is .call() Used For?

.call() is typically used when you want to:

- Reuse functions across different objects.

- Change the context (this) temporarily when running a function.

- Work with array-like objects (like arguments, NodeLists).

- Borrow methods from other objects.
