console.log("Proxy - Data Validation");

// Let's Ensure object properties meet certain rules when being set.

const userValidator = {
  set(target, prop, value) {
    if (prop === "age" && typeof value !== "number") {
      throw new TypeError("Age must be a number");
    }
    target[prop] = value;
    return true;
  },
};

const user = new Proxy({}, userValidator);
user.age = 31;
user.age = "31"; //TypeError
