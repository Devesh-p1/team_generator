const Emp = require('../library/employee');
const Man = require('../library/manager');
const Eng = require('../library/engineer');
const Int = require('../library/intern');
const reName = name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

const addEmp = employeeInfo => {

    // initiates html string for employee cards
    let Cards = '';

    employeeInfo.forEach(emp => {    
        
        const { fName, lName, id, role } = emp;
        let newEmp = '';
        let xInfo = '';


    switch (role) {
        case 'Manager':
            newEmp = new Man(reName(fName), reName(lName), id, emp.officeNumber);
            xInfo = newEmp.getOfficeNumber();
            break;
        case 'Engineer': 
            newEmp = new Eng(reName(fName), reName(lName), id, emp.github);
            xInfo = newEmp.getGithub();
            break;
        case 'Intern':
            newEmp = new Int(reName(fName), reName(lName), id, emp.school);
            xInfo = newEmp.getSchool();
            break;
        default:
            newEmp = new Emp(reName(fName), reName(lName), id);
    };
    Cards += `
    <div class="column is-one-quarter-desktop">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        ${newEmp.getIcon()}
                    </div>
                    <div class="media-content">
                        <p class="title is-4">${newEmp.getName()}</p>
                        <p class="subtitle is-6">${newEmp.getRole()}</p>
                    </div>
                </div>
                <div class="content">
                    <p>${newEmp.getId()}<br />
                    ${newEmp.getEmail()}<br />
                    ${xInfo}</p>
                </div>
            </div>
        </div>
    </div>`  
        });
        return Cards;

}