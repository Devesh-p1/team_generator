const Emp = require('./Employee');

class Eng extends Emp {
    constructor(fName, lName, id, git) {
        super(fName, lName, id);
        
        this.git = github;
        this.role = 'Engineer';
        this.icon = 'fas fa-glasses';
    };

}