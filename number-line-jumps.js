const x1 = 0; //start position
const v1 = 3;

const x2 = 4; // start position
const v2 = 2;

function kangaroo(x1, v1, x2, v2) {
    if (x1 === x2) {
        console.log('YES');
    } else if (v1 > v2) { // si v1 es mas rapido que v2
        while (x1 < x2) { //mientras que x1 sea menor o igual que x2
            x1 += v1;
            x2 += v2;
        }
        if (x1 === x2) {
            console.log('YES');
        } else {
            console.log('NO');
        } 
    } else if (v2 > v1) { // si v2 es mas rapido que v1
        while (x2 < x1) { //mientras que x2 sea menor o igual que 
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