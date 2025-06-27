# snake_case to camelCase conversion and vice versa


This is a **very real-world use case** in frontend development! Often, backends (especially REST APIs) return data in **`snake_case`**, while frontend JavaScript code prefers **`camelCase`**.

---

##  Goal:

Convert a response like this:

```json
{
  "first_name": "Aditya",
  "last_name": "Dubey",
  "user_id": 1077
}
```

To be accessible like this in your frontend model:

```js
user.firstName  // "Aditya"
user.lastName   // "Dubey"
user.userId     // 1077
```

But without manually copying or converting all keys.


---

###  Benefits:

|  Feature               |  Achieved                      |
| ------------------------ | ------------------------------- |
| camelCase access         | Without modifying backend data  |
| Works with any API shape | No manual mapping needed        |
| Two-way binding          | Updates backend-compatible keys |

---

