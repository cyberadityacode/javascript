console.log("snake_case to camelCase convertor");

// Convert a response like this:

/* 
{
  "first_name": "Aditya",
  "last_name": "Dubey",
  "user_id": 1077
}
To be accessible like this in your frontend model:
user.firstName  // "Aditya"
user.lastName   // "Dubey"
user.userId     // 1077


*/
// Use a Proxy to map snake_case to camelCase
// snake_case -> snakeCase
function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

// camelCase -> camel_case
function camelToSnake(str) {
  return str.replace(/[A-Z]/g, (char) => `_${char.toLowerCase()}`);
}

const apiResponse = {
  first_name: "Aditya",
  last_name: "Dubey",
  user_id: 1077,
};

const normalizedUser = new Proxy(apiResponse, {
  get(target, prop) {
    const snakeKey = Object.keys(target).find(
      (key) => snakeToCamel(key) === prop
    );

    return snakeKey ? target[snakeKey] : undefined;
  },

  set(target, prop, value) {
    const snakeKey = Object.keys(target).find(
      (key) => snakeToCamel(key) === prop
    );
    target[snakeKey || camelToSnake(prop)] = value;
    return true;
  },
});

console.log(normalizedUser.firstName);
console.log(apiResponse.first_name);

console.log(normalizedUser.userId);
console.log(normalizedUser.userId);

normalizedUser.firstName = "AdityaNarayan"; //setting value to the camelCase will reflect alteration in the original object property
console.log(apiResponse.first_name);
