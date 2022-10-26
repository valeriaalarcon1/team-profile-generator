const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email); // employee constructor
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    // overriden to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;