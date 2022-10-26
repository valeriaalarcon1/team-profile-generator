const Manager = require('../lib/Manager');

// describe("Manager Class", () => {
//     describe("Initialization", () => {
        it("should create a manager object with name, id, email, and office number properties", () => {
            const manager = new Manager('Valeria', 45, 'alarconmvaleria@gmail.com', 3);
            expect(manager.officeNumber).toEqual(expect.any(Number));
        });

        it("should retrieve the manager role", () => {
            const manager = new Manager('Valeria', 45, 'alarconmvaleria@gmail.com', 3);
            expect(manager.getRole()).toEqual("Manager");
        });
//     })
// });