const Emp = require ('../lib/employee');
const expectToBe = (obj, value) => {
    expect(obj).toBe(value);
};

const expectStr = (obj, substr) => {
    expect(obj).toEqual(expect.stringContaining(substr));
};

const expectNum = obj => {
    expect(obj).toEqual(expect.any(Number));
};

const emp = new Emp('John', 'Doe', 1);

test('creates a emp object', () => {
    expectToBe(emp.fName,'John');
    expectToBe(emp.lName, 'Doe');
    expectNum(emp.id);
    expectStr(emp.email, '@');
    expectToBe(emp.role, 'Employee');
    expectToBe(emp.icon, 'fas fa-briefcase');
});

test('gets emp\'s name', () => {
    expectStr(emp.getName(), `${emp.fName} ${emp.lName}`);
});

test('gets emp\'s ID', () => {
    expectStr(emp.getId(), `${emp.id}`);
});

test('gets emp\'s email', () => {
    expectStr(emp.getEmail(), emp.email);
});

test('gets emp\'s role', () => {
    expectStr(emp.getRole(), emp.role);
});

test('gets emp\'s icon', () => {
    expectStr(emp.getIcon(), emp.icon);
});