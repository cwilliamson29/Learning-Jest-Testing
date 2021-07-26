const cap = require('./cap');

test('Returns string Capitalized.', () => {
    expect(cap('yellow brick road')).toBe('Yellow brick road');
});