const Intern = require('../lib/Intern');

describe("Intern class", ()=>{

    it("Can set school via constructor", () => {
    const testValue = "Case Western";
    const e = new Intern("Jhon", 100, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
    });

    describe('getSchool method', () => {
        it("Can get school via getSchool()", () => {
        const testValue = "Case Western";
        const e = new Intern("Jhon", 100, "test@test.com", testValue);
        expect(e.getSchool()).toBe(testValue);
        });
        });

    describe('getRole method', () => {
        it("getRole() should return 'Intern'", () => {
        const testValue = "Intern";
        const e = new Intern("Jhon", 100, "test@test.com", "Case Western");
        expect(e.getRole()).toBe(testValue);
        });
        });

});