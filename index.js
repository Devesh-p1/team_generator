const Emp = require('../library/employee');
const Man = require('../library/manager');
const Eng = require('../library/engineer');
const Int = require('../library/intern');
const reName = name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};