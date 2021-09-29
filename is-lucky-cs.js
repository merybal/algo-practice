function isLucky(n) {
    const nArray = n.toString().split('');
    let sumLeft = 0;
    let sumRight = 0;
    for (let i = 0; i < nArray.length / 2; i++) {
        sumLeft += parseInt(nArray[i]);
    };
    for (let i = nArray.length / 2; i < nArray.length; i++) {
        sumRight += parseInt(nArray[i]);
    };
    if (sumLeft === sumRight) {
        return true;
    } else {
        return false;
    };
}


const n = 1230;
isLucky(n)