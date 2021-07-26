const ceasar = require('./cipher');

//ciphering

test('Returns string ciphered 1.', () => {
    expect(ceasar('cip', 'abcd', 1)).toBe('bcde');
});

test('Returns string ciphered 1.', () => {
    expect(ceasar('cip', 'attack at dawn z', 1)).toBe('buubdl bu ebxo a');
});

test('Returns string ciphered 2.', () => {
    expect(ceasar('cip', 'attack at dawn z', 2)).toBe('cvvcem cv fcyp b');
});
test('Returns string ciphered 25.', () => {
    expect(ceasar('cip', 'attack at dawn z', 25)).toBe('zsszbj zs czvm y');
});
test('Returns string ciphered 20.', () => {
    expect(ceasar('cip', 'general, attack at dawn @20% power', 20)).toBe('ayhyluf, unnuwe un xuqh @20% jiqyl');
});


//deciphering
test('Returns string deciphered 1.', () => {
    expect(ceasar('dec', 'bcde', 1)).toBe('abcd');
});
test('Returns string deciphered 1.', () => {
    expect(ceasar('dec', 'buubdl bu ebxo a', 1)).toBe('attack at dawn z');
});
test('Returns string deciphered 3.', () => {
    expect(ceasar('dec', 'dwwdfn dw gdzq c', 3)).toBe('attack at dawn z');
});
test('Returns string deciphered 25.', () => {
    expect(ceasar('dec', 'zsszbj zs czvm y', 25)).toBe('attack at dawn z');
});
test('Returns string deciphered 20.', () => {
    expect(ceasar('dec', 'unnuwe un xuqh t', 20)).toBe('attack at dawn z');
});
test('Returns string deciphered 20.', () => {
    expect(ceasar('dec', 'ayhyluf, unnuwe un xuqh @20% jiqyl', 20)).toBe('general, attack at dawn @20% power');
});