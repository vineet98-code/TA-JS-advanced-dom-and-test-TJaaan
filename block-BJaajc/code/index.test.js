const { getFullName,
  isPalindome,
  getCircumference,
  getArea, }  = require('./index');

test('full name', () => {
  expect(getFullName('hey','baby')).toBe('hey baby');
  expect(getFullName('biku', 'baby')).toBe('biku baby');
  expect(getFullName('jis', 'college')).toBe('jis college');
  expect(getFullName('jis', 'college')).not.toBe('jiscollege');
  expect(getFullName('hey', 'baby')).not.toBe('heybaby');
  expect(getFullName('biku', 'baby')).not.toBe('heybaby');
});


test('circumference of the circle', () => {
  expect(getCircumference(3)).toBe(`The circumference is 18.84955592153876`);
  expect(getCircumference(2)).toBe(`The circumference is 12.566370614359172`);
  expect(getCircumference(4)).toBe(`The circumference is 25.132741228718345`);
  expect(getCircumference(5)).not.toBe(`The circumference is 0`);
  expect(getCircumference(80)).not.toBe(`The circumference is 19`);
  expect(getCircumference(19)).not.toBe(`The circumference is 26`);
});

test('area of the circle', () => {
  expect(getArea(12)).toBe(`The area is 452.3893421169302`);
  expect(getArea(1)).toBe(`The area is 3.141592653589793`);
  expect(getArea(42)).toBe(`The area is 5541.769440932396`);
  expect(getArea(6)).not.toBe(`The area is 0`);
  expect(getArea(70)).not.toBe(`The area is 19`);
  expect(getArea(0)).not.toBe(`The area is 26`);
});


test('test for palindome', () => {
  expect(isPalindome('tot')).toBe(true);
  expect(isPalindome('coc')).toBe(true);
  expect(isPalindome('lal')).toBe(true);
  expect(isPalindome('het')).not.toBe(true);
  expect(isPalindome('newbie')).not.toBe(true);
  expect(isPalindome('india')).not.toBe(true);
});