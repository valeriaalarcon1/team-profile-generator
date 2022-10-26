const Employee = require("../lib/Employee")

describe("Employee Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, id & email properties", () => {
            const employee = new Employee('Valeria', 45, 'alarconmvaleria@gmail.com');
            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        })

        it("should retrive the employee's name", () => {
            const employee = new Employee('Valeria', 45, 'alarconmvaleria@gmail.com');
            expect(employee.getName()).toEqual(expect.any(String));
        });
        
        
        it("should retrive the employee's ID", () => {
            const employee = new Employee('Valeria', 45, 'alarconmvaleria@gmail.com');
            expect(employee.getID()).toEqual(expect.any(Number));
        });
        
        
        it("should retrive the employee's ID", () => {
            const employee = new Employee('Valeria', 45, 'alarconmvaleria@gmail.com');
            expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
        });
        
        
        it("should retrive the employee's role", () => {
            const employee = new Employee('Valeria', 45, 'alarconmvaleria@gmail.com');
            expect(employee.getRole()).toEqual("Employee");
        }); 
    })
})