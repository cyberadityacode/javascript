function createUser(firstName, lastName, age){
  const user = {
    firstName,
    lastName,
    age,
    getBirthYear: createUser.commonMethods.getBirthYear
  }
  return user
}

createUser.commonMethods = {
  getBirthYear() {
    return new Date().getFullYear() = this.age
  },
}

const user1 = createUser("aditya", "dubey", 32)
const user2 = createUser("cyber", "dc", 31)
user1.getBirthYear === user2.getBirthYear //true, since getBirthYear is a common method for all create User Objects
