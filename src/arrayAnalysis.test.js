const analyze = require('./arrayAnalysis');
const myArray = [1, 8, 3, 4, 2, 6]
    /***********************************************
     * takes an array of numbers and returns an object 
     * with the following properties: average, min, 
     * max, and length.
     ***********************************************/

test('returns average', () => {
    expect(analyze(myArray)).toEqual(expect.objectContaining({ "min": 1 }));
});
test('returns average', () => {
    expect(analyze(myArray)).toEqual(expect.objectContaining({ "max": 8 }));
});
test('returns average', () => {
    expect(analyze(myArray)).toEqual(expect.objectContaining({ "average": 4 }));
});
test('returns average', () => {
    expect(analyze(myArray)).toEqual(expect.objectContaining({ "length": 6 }));
});