const Emp = require('./employee');

class Eng extends Emp {
    constructor(fName, lName, id, git) {
        super(fName, lName, id);
        
        this.git = git;
        this.role = 'Engineer';
        this.icon = 'fas fa-glasses';
    };
    getGit() {
        return `<span class="has-text-weight-bold">GitHub:</span> <a href="https://github.com/${
            this.git}" target="_blank" class="has-text-primary">${this.git}</a>`
    };
};

module.exports = Eng;
