const Man = require ('../lib/manager');
const expectToBe = (obj, value) => {
    expect(obj).toBe(value);
};

const expectStr = (obj, substr) => {
    expect(obj).toEqual(expect.stringContaining(substr));
};

const expectNum = obj => {
    expect(obj).toEqual(expect.any(Number));
};

const man = new Man('John', 'Doe', 1, 1);

test('creates a man object', () => {
    expectToBe(man.fName,'John');
    expectToBe(man.lName, 'Doe');
    expectNum(man.id);
    expectStr(man.email, '@');
    expectToBe(man.role, 'Manager');
    expectNum(man.offNumber);
    expectToBe(man.icon, 'fas fa-mug-hot');
});

test('gets man\'s name', () => {
    expectStr(man.getName(), `${man.fName} ${man.lName}`);
});

test('gets man\'s ID', () => {
    expectStr(man.getId(), `${man.id}`);
});

test('gets man\'s email', () => {
    expectStr(man.getEmail(), man.email);
});

test('gets man\'s role', () => {
    expectStr(man.getRole(), man.role);
});

test('gets man\'s office number', () => {
    expectStr(man.getOffNumber(), `${man.offNumber}`);
});

test('gets man\'s icon', () => {
    expectStr(man.getIcon(), manr.icon);
});