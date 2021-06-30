const Employee = require ('../lib/employee');
const expectToBe = (obj, value) => {
    expect(obj).toBe(value);
};

const expectStr = (obj, substr) => {
    expect(obj).toEqual(expect.stringContaining(substr));
};

const expectNum = obj => {
    expect(obj).toEqual(expect.any(Number));
};

const emp = new Employee('John', 'Doe', 1);