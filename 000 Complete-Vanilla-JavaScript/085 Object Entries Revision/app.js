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

// Filter Out Empty Fields from a Form Submission

const formData = {
  name: "John Doe",
  email: "",
  phone: "123-456-7890",
  address: "",
};

const cleanedData = Object.fromEntries(
  Object.entries(formData).filter(([_, value]) => value !== "")
);

console.log(cleanedData);
