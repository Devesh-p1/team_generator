class Emp {
    constructor(fName, lName, id) {
        this.fName = fName;
        this.lName = lName;
        this.id = id;
        this.email = `${fName}.${lName}@company.com`;
        this.role = 'Employee';
        this.icon = 'fas fa-briefcase'
    };

    getName() {
        return `${this.fName} ${this.lName}`;
    };
    getId() {
        return `<span class="has-text-weight-bold">ID:</span> ${this.id}`;
    };
    getEmail() {
        return `<span class="has-text-weight-bold">Email:</span> <a href="mailto:${
            this.email}" class="has-text-primary">${this.email}</a>`;
    };
}