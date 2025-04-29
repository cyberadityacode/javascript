/* 1 Static properties and methods belong to the class itself, not to instances of the class.
2 To declare a static property or method, use the static keyword.
3 To access a static property or call a static method, use the class name followed by the dot operator. */


class CreateUser{
    #age
    constructor(a,b,c){
        // console.log(a,b,c);
        this.firstName = a
        this.lastName = b
        this.#age =c
    }

    static hi = "hello"
    static {
        console.log('static block, runs without calling');
    }
    getBirthYear() {
        return new Date().getFullYear() = this.#age
    }
    getFullName(){
        return this.firstName + ' ' + this.lastName
    }
}
const user1 = new CreateUser("aditya", "dubey", 32)
const user2 = new CreateUser("cyber", "dc", 31)

// console.log(user1.age); //undefined
// console.log(user1.#age); //Property '#age' is not accessible outside class 'CreateUser' because it has a private identifier.
