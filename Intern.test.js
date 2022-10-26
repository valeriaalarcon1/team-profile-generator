const Intern = require('../lib/Intern');

// describe("Intern Class", () => {
//     describe("Initialization", () => {
        it("should create an intern object with name, id, email, and school id properties", () => {
            const intern = new Intern('Valeria', 45, 'alarconmvaleria@gmail.com', 'FU');
            expect(intern.school) .toEqual(expect.any(String));
        });

        it("should retrieve school from getSchool", () => {
            const intern = new Intern('Valeria', 45, 'alarconmvaleria@gmail.com', 'FU');
            expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
        });

        it("should retrive employee's role", () => {
            const intern = new Intern('Valeria', 45, 'alarconmvaleria@gmail.com', 'FU');
            expect(intern.getRole()).toEqual("Intern");
        });
//     })
// });