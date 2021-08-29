const calculator  = require('./calculator');

test('add 1 + 2 to equal 3', ()=> {
    expect(calculator.add(1,2).tobe(3));
});
test('add 100 + 20 to equal 120', ()=> {
    expect(calculator.add(100,20).tobe(120));
});
test('add 10 + 20 to equal 30', ()=> {
    expect(calculator.add(10,20).tobe(30));
});
test("add '10' + undefined  to not equal 120", ()=> {
    expect(calculator.add('10',undefined).tobe('Not a valid input'));
});

test('sub 10 - 5 to equal 5', ()=> {
    expect(calculator.subtract(10,5).tobe(5));
});

test('sub 100 - 5 to not equal 5', ()=> {
    expect(calculator.subtract(100,5).tobe(5));
});