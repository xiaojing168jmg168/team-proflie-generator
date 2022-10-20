const Engineer = require('../lib/Engineer');


describe("Engineer class", ()=>{

    it("Can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Jhon", 100, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
    });

    describe('getGitHub method', () => {
        it("Can get GitHub via getGitHub()", () => {
        const testValue = "GitHubUser";
        const e = new Engineer("Jhon", 100, "test@test.com", testValue);
        expect(e.getGitHub()).toBe(testValue);
        });
        });

    describe('getRole method', () => {
        it("getRole() should return 'Engineer'", () => {
        const testValue = "Engineer";
        const e = new Engineer("Jhon", 100, "test@test.com", "GitHubUser");
        expect(e.getRole()).toBe(testValue);
        });
        });

});