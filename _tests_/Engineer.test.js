const { describe } = require('yargs');
const Engineer = require('../lib/Engineer');

// describe("Engineer Class", () => {
//     describe("Initialization", () => {
        it("should make an engineer object with name, id, email, and github properties", () => {
            const engineer = new Engineer('Valeria', 45, 'alarconmvaleria@gmail.com', 'valeriaalarcon1');
            expect(engineer.github).toEqual(expect.any(String));
        });

        it("should retrive the engineer's github", () => {
            const engineer = new Engineer('Valeria', 45, 'alarconmvaleria@gmail.com', 'valeriaalarcon1');
            expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
        });

        it("should retrieve the engineer's role", () => {
            const engineer = new Engineer('Valeria', 45, 'alarconmvaleria@gmail.com', 'valeriaalarcon1');
            expect(engineer.getRole()).toEqual("Engineer");
        });
//     })
// });