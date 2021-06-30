const Emp = require('./employee');

class Man extends Emp {
    constructor(ftName, lName, id, offNumber) {
        super(ftName, lName, id);
        
        this.offNumber = offNumber;
        this.role = 'Manager';
        this.icon = 'fas fa-mug-hot';
    };
    getOffNumber() {
        return `<span class="has-text-weight-bold">Office Number:</span> ${this.offNumber}`;
    };
};
module.exports = Man;