const Emp = require('./employee');

class Intern extends Employee {
    constructor(fName, lName, id) {
        super(fName, lName, id);
        this.role = 'Intern';
    };
};