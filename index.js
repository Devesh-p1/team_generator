const inquirer = require('inquirer');
const fs = require('fs');
const genPage = require('main.js')
const Emp = [];
const reName = name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What is the employees role?',
        choices:
            () => {
            if (Employees.some(employee => employee.role === 'Manager')) {
                return ['Engineer', 'Intern']    
            } else {
                return ['Manager', 'Engineer', 'Intern']
            }
        }
    },
    {
        type: 'input',
        name: 'fName',
        message: ({ role }) => `What is the ${role.toLowerCase()}'s first name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the first name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'lName',
        message: ({ firstName }) => `What is ${reName(fName)}'s last name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the last name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: ({ fName }) => `What is ${reName(fName)}'s ID number?`,
        validate: idInput => {
            if (!isNaN(parseInt(idInput))) {
                return true;
            } else {
                console.log('Please enter a valid ID number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'offNumber',
        message:  ({ fName }) => `What is ${reName(fName)}'s office number?`,
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        },
        validate: officeNumberInput => {
            if (!isNaN(parseInt(offNumberInput))) {
                return true;
            } else {
                console.log('Please enter a valid number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'git',
        message: ({ fName }) => `What is ${reName(fName)}'s GitHub userame?`,
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        },
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Please enter a username!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add another employee?',
        default: true
    }
]

const promptUser = () => {

    return inquirer.prompt(questions)
    .then(userResponse => {
        Emp.push(userResponse);
        if (userResponse.addEmp) {
            return promptUser();
        } else {
            return Emp;
        };
    });
};