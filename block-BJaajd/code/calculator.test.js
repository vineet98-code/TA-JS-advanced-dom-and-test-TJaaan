const calculator  = require('./calculator');

test('add 1 + 2 to equal 3', ()=> {
    expect(calculator.add(1,2)).toBe(3);
});
test('add 100 + 20 to equal 120', ()=> {
    expect(calculator.add(100,20)).toBe(120);
});
test('add 10 + 20 to equal 30', ()=> {
    expect(calculator.add(10,20)).toBe(30);
});
test("add '10' + undefined  to not equal 120", ()=> {
    expect(calculator.add('10',undefined)).toBe('Not a valid input');
});


test('subtract 10 - 5 to equal 5', ()=> {
    expect(calculator.subtract(10,5)).toBe(5);
});

test('subtract 100 - 5 to equal 95', ()=> {
    expect(calculator.subtract(100,5)).toBe(95);
});


test('add 100 + 20 to equal 120', ()=> {
    expect(calculator.sum(100,20)).toBe(120);
});
test('add 10 + 20 to equal 30', ()=> {
    expect(calculator.sum(10,20)).toBe(30);
});


test('add 100 + 20 to equal 120', ()=> {
    expect(calculator.multiply(10,20)).toBe(200);
});
test('add 10 + 20 to equal 30', ()=> {
    expect(calculator.multiply(1,20)).toBe(20);
});


test('add 100 + 20 to equal 120', ()=> {
    expect(calculator.power(10,2)).toBe(100);
});
test('add 10 + 20 to equal 30', ()=> {
    expect(calculator.power(2,2)).toBe(4);
});

test('add 100 + 20 to equal 120', ()=> {
    expect(calculator.factorial(5)).toBe(120);
});
test('add 10 + 20 to equal 30', ()=> {
    expect(calculator.factorial(2)).toBe(2);
});