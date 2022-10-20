class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        }
        getName(){
        return this.name;
        }
        getId(){
        return this.id;
        }
        getEmail(){
        return this.email;
        }
        getRole(){
        return 'Employee';
    }
    //print info about employee
    printInfo(){
    console.log(`This employee's name is: ${this.name}`);
    console.log(`This employee's id is: ${this.id}`);
    console.log(`This employee's email is: ${this.email}`);
    }
}
module.exports = Employee;