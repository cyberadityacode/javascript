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

class Student extends CreateUser{
    constructor(firstName, lastName, age, degree){
        super(firstName,lastName,age)
        this.degree = degree
    }
    study(){
        console.log('studying');
    }
}

class Employee extends CreateUser {
    constructor(firstName,lastName,age, company){
        super(firstName,lastName,age)
        this.company = company
    }
}
const stud1 = new Student("studentname","s_ln", 20, "BE")
const emp1 = new Employee('a','b',32,'wordpress')
const user1 = new CreateUser("aditya", "dubey", 32)
const user2 = new CreateUser("cyber", "dc", 31)

// console.log(user1.age); //undefined
// console.log(user1.#age); //Property '#age' is not accessible outside class 'CreateUser' because it has a private identifier.

/* const user = {
    firstName: 'aditya',
    lastName : 'dubey',
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    }
} */
const user = {
    firstName: 'aditya',
    lastName : 'dubey',
    get fullName(){
        console.log('getting...');
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        console.log('setting...');
        console.log(value);
        const splitted = value.split(' ')
        console.log(splitted);
        this.firstName = splitted[0]
        this.lastName = splitted[1]
    }
}

// user.fullName = 'cyber adi'