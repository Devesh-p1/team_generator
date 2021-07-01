const Int = require('../lib/intern');
const expectToBe = (obj, value) => {
    expect(obj).toBe(value);
};

const expectStr = (obj, substr) => {
    expect(obj).toEqual(expect.stringContaining(substr));
};

const expectNum = obj => {
    expect(obj).toEqual(expect.any(Number));
};

const int = new Int('John', 'Doe', 1, 'UCF');

test('creates an int object', () => {
    expectToBe(int.fName, 'John');
    expectToBe(int.lName, 'Doe');
    expectNum(int.id);
    expectStr(int.email, '@');
    expectToBe(int.role, 'Intern');
    expectToBe(int.school, 'UCF');
    expectToBe(int.icon, 'fas fa-graduation-cap');
});

test('gets int\'s name', () => {
    expectStr(int.getName(), `${int.fName} ${int.lName}`);
});

test('gets int\'s ID', () => {
    expectStr(int.getId(), `${int.id}`);
});

test('gets int\'s email', () => {
    expectStr(int.getEmail(), int.email);
});

test('gets int\'s role', () => {
    expectStr(int.getRole(), int.role);
});

test('gets int\'s icon', () => {
    expectStr(int.getIcon(), int.icon);
});