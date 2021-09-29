const x1 = 0; //start position
const v1 = 3;

const x2 = 4; // start position
const v2 = 2;

function kangaroo(x1, v1, x2, v2) {
    if (x1 === x2) {
        console.log('YES');
    } else if (v1 > v2) {
        while (x1 < x2) {
            x1 += v1;
            x2 += v2;
        }
        if (x1 === x2) {
            console.log('YES');
        } else {
            console.log('NO');
        } 
    } else if (v2 > v1) {
        while (x2 < x1) {
            x1 += v1;
            x2 += v2;
        }
        if (x2 === x1) {
            console.log('YES');
        } else {
            console.log('NO');
        } 
    } else {
        console.log('NO');
    }

};

kangaroo(x1, v1, x2, v2)