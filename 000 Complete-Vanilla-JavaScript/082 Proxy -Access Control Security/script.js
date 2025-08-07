console.log("Proxy - Access Control & Security");

const secure = new Proxy(
  { password: "secret", username: "aditya" },
  {
    get(target, prop) {
      if (prop === "password") {
        throw new Error("Access Denied");
      }
      return target[prop];
    },
  }
);

try {
  console.log(secure.password);
} catch (err) {
  console.error("Error Accessing Password: ", err.message);
}

console.log("Username: ", secure.username);
