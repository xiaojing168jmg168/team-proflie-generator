const Manager = require('../lib/Manager');

describe("Manager class", ()=>{

    it("Can set office number via constructor", () => {
    const testValue = 123;
    const e = new Manager("Jhon", 100, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
    });

    describe('getOfficeNumber method', () => {
        it("Can get office number via getOfficeNumber()", () => {
        const testValue = 123;
        const e = new Manager("Jhon", 100, "test@test.com", testValue);
        expect(e.getOfficeNumber()).toBe(testValue);
        });
        });

    describe('getRole method', () => {
        it("getRole() should return 'Manager'", () => {
        const testValue = "Manager";
        const e = new Manager("Jhon", 100, "test@test.com", 123);
        expect(e.getRole()).toBe(testValue);
        });
        });

});