const cart  = require('./cartTest');


test('test cart', () => {
    expect(cart).toPush('mani');
    expect(new Set(cart)).toPush('mani');
 });

 