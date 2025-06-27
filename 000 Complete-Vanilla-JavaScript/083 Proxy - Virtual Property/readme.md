###  What is a *Virtual Property*?

A **virtual property** is a property that **doesn't physically exist** on an object but can be **accessed as if it does**, often with dynamic behavior or computation behind the scenes.

You typically implement virtual properties using:

* **`getters`** in objects/classes
* **JavaScript `Proxy`** objects (more flexible and powerful)

---

###  Simple Example with Proxy

```js
const person = {
  firstName: "Aditya",
  lastName: "Dubey",
};

const withVirtualProps = new Proxy(person, {
  get(target, prop) {
    if (prop === "fullName") {
      return `${target.firstName} ${target.lastName}`;
    }
    return target[prop];
  },
});

console.log(withVirtualProps.fullName); // "Aditya Dubey"
```

 Here, `fullName` is a **virtual property** — it’s not stored on the object, but you can access it like a normal property.

---

###  Use Cases of Virtual Properties

| Use Case                       | Description                                                      |
| ------------------------------ | ---------------------------------------------------------------- |
| **Computed values**            | Return dynamic values without storing them                       |
| **Aliases for properties**     | Provide alternative names (e.g., `id` instead of `_id`)          |
| **Localization or formatting** | Return dates, numbers, or strings in a specific format           |
| **Virtual relationships**      | In ORMs or APIs, represent data from related entities            |
| **Lazy calculations**          | Calculate something on-demand only when needed                   |
| **Dynamic filtering/masking**  | Show/hide certain data (e.g. hide partial email or phone number) |

---

###  Example: Masking Email (Security Use)

```js
const user = {
  email: "aditya@example.com",
};

const maskedUser = new Proxy(user, {
  get(target, prop) {
    if (prop === "maskedEmail") {
      const [name, domain] = target.email.split("@");
      return name[0] + "*****@" + domain;
    }
    return target[prop];
  },
});

console.log(maskedUser.maskedEmail); // a*****@example.com
```

---

###  Important Notes

* Virtual properties **aren’t enumerable** unless you customize traps like `ownKeys()` or `has()`.
* You can only *read* from them unless you define custom `set()` behavior.
* Ideal when you want **readable, clean APIs** without polluting the data model.

