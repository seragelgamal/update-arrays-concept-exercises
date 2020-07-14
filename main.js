// q1
// a
// array1[0] = 'magenta';

// b
// array1[2] += 700;

// c
// array1[array1.length - 1] = 'the end';

// d
// array1.push(70);

// e
// array1.unshift(500);

// f
// array1.splice(5, 0, 80);

// q2
function adjustGrades(anArray) {
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] == 48 || anArray[i] == 49) {
            anArray[i] = 50;
        } else if (anArray[i] == 78 || anArray[i] == 79) {
            anArray[i] = 80;
        }
    }
}

// q3
function replaceAll(anArray, oldVal, newVal) {
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] == oldVal) {
            anArray[i] = newVal;
        }
    }
}

// q4
function swap(anArray, index1, index2) {
    let element1 = anArray.splice(index1, 1, anArray[index2]);
    anArray.splice(index2, 1, element1[0]);
}