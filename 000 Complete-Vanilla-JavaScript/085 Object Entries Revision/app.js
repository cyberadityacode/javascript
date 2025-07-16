console.log("Object Entries Revision");

const person = {
  name: "Aditya",
  age: 32,
  city: "Ujjain",
};

console.log(Object.entries(person)); //convert object to Arrays

for (const [key, value] of Object.entries(person)) {
  console.log(`${key} : ${value}`);
}

