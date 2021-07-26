const reverse = require('./reverse');

test('Returns string reversed.', () => {
    expect(reverse('yellow')).toBe('wolley');
});