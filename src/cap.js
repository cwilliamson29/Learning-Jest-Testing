function cap(str) {
    let capStr = str.charAt(0).toUpperCase() + str.slice(1);
    return capStr;
}
module.exports = cap;