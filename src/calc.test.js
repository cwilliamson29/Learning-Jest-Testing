const calc = require('./calc');

test('adds 1 + 2 to equal 3', () => {
    expect(calc.add(1, 2)).toBe(3);
});
test('subtracts 1 - 2 to equal -1', () => {
    expect(calc.sub(1, 2)).toBe(-1);
});
test('divides 12 / 2 to equal 6', () => {
    expect(calc.div(12, 2)).toBe(6);
});
test('miltiples 6 * 2 to equal 12', () => {
    expect(calc.mul(6, 2)).toBe(12);
});