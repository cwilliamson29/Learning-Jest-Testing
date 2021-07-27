const abc = " abcdefghijklmnopqrstuvwxyz";
const abcArray = abc.split('');
const punc = '`,.;[]!@#$%^&*()-=_+<>?:"{}|';
const puncArray = punc.split('');
const numbers = "1234567890";
const numArray = numbers.split('');

function cipher(str, key) {
    const strArray = str.split('');
    let strNew = "";

    for (i = 0; i < strArray.length;) {
        for (k = 0; k < puncArray.length;) {
            if (strArray[i] === puncArray[k]) {
                strNew = strNew + puncArray[k];
                break
            }
            ++k
        }
        for (L = 0; L < numArray.length;) {
            if (strArray[i] === numArray[L]) {
                strNew = strNew + numArray[L];
                break
            }
            ++L
        }
        for (j = 0; j < abcArray.length;) {

            if (strArray[i] === abcArray[j]) {
                //console.log(abcArray.length);
                key2 = j + key;

                if (key2 > 26) {
                    let key3 = key2 - 26;
                    strNew = strNew + abcArray[key3];
                    break

                } else if (strArray[i] === abcArray[0]) {
                    //console.log(abcArray);

                    strNew = strNew + abcArray[0];
                    break
                } else {
                    strNew = strNew + abcArray[key2];
                    break
                }
            }
            ++j
        }
        ++i
    }
    console.log(strNew)
    return strNew;
}

function decipher(str, key) {
    const strArray = str.split('');
    let strNew = "";

    for (i = 0; i < strArray.length;) {
        for (k = 0; k < puncArray.length;) {
            if (strArray[i] === puncArray[k]) {
                strNew = strNew + puncArray[k];
                break
            }
            ++k
        }
        for (L = 0; L < numArray.length;) {
            if (strArray[i] === numArray[L]) {
                strNew = strNew + numArray[L];
                break
            }
            ++L
        }

        for (j = 0; j < abcArray.length;) {
            if (strArray[i] === abcArray[j]) {
                //console.log(abcArray[i] + '  ' + 'j: ' + j);
                key2 = j - key;

                if (key2 <= 0) {
                    if (strArray[i] === abcArray[0]) {
                        //console.log(abcArray);

                        strNew = strNew + abcArray[0];

                        break
                    }
                    let key3 = key2 + 26;
                    strNew = strNew + abcArray[key3];
                    break

                } else {
                    strNew = strNew + abcArray[key2];

                    break
                }
            }
            ++j
        }

        ++i
    }
    console.log(strNew)
    return strNew;
}

function ceasar(type, str, key) {
    if (type === 'cip') {
        return cipher(str, key);
    } else {
        return decipher(str, key);
    }

}
module.exports = ceasar;