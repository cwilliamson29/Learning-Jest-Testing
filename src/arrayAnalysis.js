function average(arr) {
    let num = 0;
    for (i = 0; i < arr.length; i++) {
        num += arr[i];
    }
    num = num / arr.length;
    return num;
}

function analyze(arr) {
    arr.sort((a, b) => a - b);

    myObj = {
            average: average(arr),
            min: arr[0],
            max: arr[arr.length - 1],
            length: arr.length
        }
        //console.log(myObj.min)
    return myObj;
}

module.exports = analyze;