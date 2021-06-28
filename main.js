const Emp = require('../lib/employee');
const Man = require('../lib/manager');
const Eng = require('../lib/engineer');
const Int = require('../lib/intern');
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

const genHtml = tempData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css" />
    </head>
    <body>
        <section class="hero is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">The Team</h1>
                </div>
            </div>
        </section>
        <main class="m-6">
            <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
                ${addEmp(tempData)}
            </div>
        </main>
    </body>
    </html>
    `;
};

module.exports = genHtml;