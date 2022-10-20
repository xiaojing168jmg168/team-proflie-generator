const Employee = require('../lib/Employee');

describe("Employee class", ()=>{

    it("Can instantiate Employee instance", ()=>{
    const e = new Employee();
    expect(typeof(e)).toBe("object");
    });

    it("Can set name via constructor arguments", ()=>{
    const name = "Jhon";
    const e = new Employee(name);
    expect(e.name).toBe(name);
    });

    it("Can set id via constructor arguments", ()=>{
    const testId = 167;
    const e = new Employee("Foo", testId);
    expect(e.id).toBe(testId);
    });

    it("Can set email via constructor arguments", ()=>{
    const testEmail = "test@test.com";
    const e = new Employee("Foo", 100, testEmail);
    expect(e.email).toBe(testEmail);
    });

    //test method in employee class
    describe('getName method', () => {
    it("Can get name via getName()", () => {
    const testName = "Jhon";
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName);
    });
    });

    describe('getId method', () => {
    it("Can get id via getId()", () => {
    const testId = 100;
    const e = new Employee("Jhon",testId);
    expect(e.getId()).toBe(testId);
    });
    });

    describe('getEmail method', () => {
    it("Can get email via getEmail()", () => {
    const testEmail = "test@test.com";
    const e = new Employee("Jhon", 100, testEmail);
    expect(e.getEmail()).toBe(testEmail);
    });
    });

    describe('getRole method', () => {
    it("getRole() should return 'Employee'", () => {
    const testValue = "Employee";
    const e = new Employee("Jhon", 100, "test@test.com");
    expect(e.getRole()).toBe(testValue);
    });
    });
});