const index = require("./index");

test('getFullName firstName + lastName to equal `firstName  +  lastName`', () => {
    expect(getFullName('Jon', 'Show')).toBe('Jon Show');
});

test('getArea radius to equal `Math.PI * radius * radius`', () => {
    expect(getFullName(2)).toEqual('12.56');
});




