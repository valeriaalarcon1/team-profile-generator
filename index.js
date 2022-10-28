// DEPENDENCIES
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const team = [];

// prompt inputs
async function managerPrompt() {
    return new Promise((resolve, reject) => {
        inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'Please enter the name of the team manager.',
                        name: 'name',
                    },
                    {
                        type: 'input',
                        message: 'Please enter your ID.',
                        name: 'ID',
                    },
                    {
                        type: 'input',
                        message: 'Please enter your email.',
                        name: 'email',
                    },
                    {
                        type: 'input',
                        message: 'Please enter your office number.',
                        name: 'officeNumber',
                    }
                ])

        .then((managerData) => {
            const {name, ID, email, officeNumber} = managerData;
            const manager = new Manager (name, ID, email, officeNumber)
            team.push(manager);
        })
        
        .then(() => {
            resolve();
        })
    })
}

async function employeePrompt() {
    return new Promise((resolve, reject) => {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Please select the role of the employee you would like to add.',
                    name: 'role',
                    choices: ["Engineer", "Intern"],
                },
                {
                    type: 'input',
                    message: 'Please enter the name of the employee.',
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'Please enter their ID.',
                    name: 'ID',
                },
                {
                    type: 'input',
                    message: 'Please enter their email.',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'Please enter their github username.',
                    name: 'github',
                    when: (input) => input.role === "Engineer",
                },
                {
                    type: 'input',
                    message: 'Please enter their school.',
                    name: 'school',
                    when: (input) => input.role === "Intern",
                },
                {
                    type: 'list',
                    message: 'Would you like to add another member to the team?',
                    name: 'addMore',
                    choices: ["Yes", "No"]
                },
            ])

        .then((employeeData) => {
            console.log(employeeData);
            const {name, role, ID, email, github, school, addMore} = employeeData;
            if (role === "Engineer") {
                employee = new Engineer (name, ID, email, github);
            } else if (role === "Intern") {
                employee = new Intern (name, ID, email, school);
            }
            team.push(employee);
            if (addMore === "Yes") {
                return employeePrompt(team);
            } else {
                return team;
            }
        })
        .then(() => {
            resolve();
        })
    });
}


const createCard = () => {
    const teamCards = team.map((person) => {
        console.log(person);
        if (person.getRole() === "Manager") {
            return `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">${person.getName()}</h4>
                <h6 class="card-text">${person.getRole()}</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${person.getID()}</li>
                    <li class="list-group-item">Email: ${person.getEmail()}</li>
                    <li class="list-group-item">Office number: ${person.officeNumber}</li>
                </ul>
            </div>
        `
        } else if (person.getRole() === "Engineer") {
            return `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">${person.getName()}</h4>
                <h6 class="card-text">${person.getRole()}</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${person.getID()}</li>
                    <li class="list-group-item">Email: ${person.getEmail()}</li>
                    <li class="list-group-item">Github: <a href="github.com/${person.getGithub()}" class="card-link">${person.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `
        } else if (person.getRole() === "Intern") {
            return `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">${person.getName()}</h4>
                <h6 class="card-text">${person.getRole()}</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${person.getID()}</li>
                    <li class="list-group-item">Email: ${person.getEmail()}</li>
                    <li class="list-group-item">School: ${person.getSchool()} </li>
                </ul>
            </div>
        </div>
        `
        }
    })
    let htmlOutput = "";
    for (const card of teamCards) {
        htmlOutput += card;
    }
    console.log(htmlOutput);
    return htmlOutput;
}

// index.html file
function generateHTML(createCard) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="./assets/css/style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
</head>
<body>
    <header class = "jumbotron jumbotron-fluid .bg-info">My Team</header>
    <main>
        ${createCard}
    </main>
</body>
</html>
`
}




// INITIALIZATION
async function init() {
    await managerPrompt();
    await employeePrompt();
    fs.writeFile('./dist/index.html', generateHTML(createCard()), (err) =>
    err ? console.error(err) : console.log('You have successfully created your team!'));
}

init();