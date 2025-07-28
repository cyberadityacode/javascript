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
