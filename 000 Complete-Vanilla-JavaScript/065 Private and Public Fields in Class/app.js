function CreateUser(firstName, lastName, age){
  const user = {
    firstName,
    lastName,
    age,
    getBirthYear: CreateUser.commonMethods.getBirthYear
  }
  return user
}

CreateUser.commonMethods = {
  getBirthYear() {
    return new Date().getFullYear() = this.age
  },
}

const user1 = new CreateUser("aditya", "dubey", 32)
const user2 = new CreateUser("cyber", "dc", 31)
user1.getBirthYear === user2.getBirthYear //true, since getBirthYear is a common method for all create User Objects
 