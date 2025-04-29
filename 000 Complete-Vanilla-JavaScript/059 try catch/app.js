/* try{
  console.log(a);
}catch(err){
  // console.log(err);
  console.dir(err)
}

console.log(3+7); */

const user = {
  username: "aditya",
  age: 32,
};

// console.log(user.address); //undefined
// console.log(user.address.city); //cant read property of undefined | undefined.city

try {
  console.log(user.address);
  console.log(user.address.city);
} catch (error) {
  console.log(error);
} finally {
  console.log("finally executed");
}

async function makeRequest() {
  try {
    const response = await fetch("https://httpbin.org/delay/5000");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
makeRequest()