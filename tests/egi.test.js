const Eng = require('../lib/engineer');
const expectToBe = (obj, value) => {
    expect(obj).toBe(value);
};

const expectStr = (obj, substr) => {
    expect(obj).toEqual(expect.stringContaining(substr));
};

const expectNum = obj => {
    expect(obj).toEqual(expect.any(Number));
};


const eng = new Eng('John', 'Doe', 1, 'jamescodes');

test('creates an eng object', () => {
    expectToBe(eng.fName, 'John');
    expectToBe(eng.lName, 'Doe');
    expectNum(eng.id);
    expectStr(eng.email, '@');
    expectToBe(eng.role, 'Engineer');
    expectToBe(eng.icon, 'fas fa-glasses');
});

test('gets eng\'s name', () => {
    expectStr(eng.getName(), `${eng.fName} ${eng.lName}`);
});

test('gets eng\'s ID', () => {
    expectStr(eng.getId(), `${eng.id}`);
});

test('gets eng\'s email', () => {
    expectStr(eng.getEmail(), eng.email);
});

test('gets eng\'s role', () => {
    expectStr(eng.getRole(), eng.role);
});

test('gets eng\'s git', () => {
    expectStr(eng.getGit(), eng.git);
});

test('gets eng\'s icon', () => {
    expectStr(eng.getIcon(), eng.icon);
});