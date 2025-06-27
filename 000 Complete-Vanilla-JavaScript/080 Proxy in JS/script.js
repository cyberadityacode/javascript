console.log("Proxy in JavaScript");

const user = {
  name: "aditya",
  age: 31,
};

console.log("Original Object: ", user);
/* 
const proxy = new Proxy(target, handler);

target: The original object you want to wrap.

handler: An object containing traps — functions that define custom behavior for operations.
*/
const proxyUser = new Proxy(user, {
  get(target, prop) {
    console.log(`Reading Property : ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Setting Property ${prop} to ${value}`);
    target[prop] = value;
    return true;
  },
});

console.log(proxyUser.name);
proxyUser.age = 32;

console.log(proxyUser);
console.log(user);

