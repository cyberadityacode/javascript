console.log("Virtual Property using Proxy");

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

console.log(withVirtualProps.fullName); //Aditya Dubey
console.log(withVirtualProps.firstName); //Aditya
console.log(withVirtualProps.lastName); //Dubey
console.log(withVirtualProps.age); // undefined

// Provide alternative names (e.g., id instead of _id)

// Map a real property like _id to an alias like id, so you can access it like:

// console.log(user.id); // instead of user._id

const dbUser = {
  _id: "dc1077",
  name: "Aditya Dubey",
};

const apiUser = new Proxy(dbUser, {
  get(target, prop) {
    if (prop === "id") {
      return target._id; //virtual alias
    }
    return target[prop];
  },
  set(target, prop, value) {
    if (prop === "id") {
      target._id = value; // allow writing via alias too
      return true;
    }
    target[prop] = value;
    return true;
  },
});

console.log(apiUser._id);
console.log(apiUser.id);

console.log(apiUser.name);

apiUser.id = "dc1063"; //update via alias
console.log(apiUser._id);
console.log(apiUser.id);
console.log(apiUser.name);

/* 
Masking Email (for Security Use)
*/

const user = {
  email: "adityadubey793@gmail.com",
};

const maskUser = new Proxy(user, {
  get(target, prop) {
    if (prop === "maskedEmail") {
      const [name, domain] = target.email.split("@");
      //   return [name, domain];
      return name[0] + "******@" + domain;
    }

    return target[prop];
  },

  set(target, prop, value) {
    if (prop === "maskedEmail") {
      const [maskedName, domain] = target.email.split("@");
      const firstChar = maskedName[0];

      target.email = firstChar + "updated@" + domain;
      return true;
    }
    target[prop] = value;
    return true;
  },
});

maskUser.maskedEmail = "a***@gmail.com";
console.log(maskUser.maskedEmail);
console.log(user.email);
