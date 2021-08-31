const index = require("./index");

test('getFullName firstName + lastName to equal `firstName  +  lastName`', () => {
    expect(getFullName('Jon', 'Show')).toBe('Jon Show');
});


