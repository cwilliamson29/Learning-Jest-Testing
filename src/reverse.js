function reverse(str) {
    let revStr = str.split('').reverse().join('');
    return revStr;
}
module.exports = reverse;