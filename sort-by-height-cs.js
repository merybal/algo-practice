function sortByHeight(a) {
    let treesIndex = [];
    let sortedArray = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) {
            treesIndex.push(i);
        }
    }
    let arrayString = a.toString();
    let newArray = arrayString.split('-1,', a.length)
    for (let j = 0; j < newArray.length; j++) {
        if (!newArray[j]) {
            sortedArray.push(-1);
        } else {
            let subArray = newArray[j].split(',');
            for (let k = 0; k < newArray.length; k++) {
                if (subArray[k] === '') {
                    subArray.splice(k, 1);
                }
            }
            subArray.sort();
            for (let l = 0; l < subArray.length; l++) {
                sortedArray.push(parseInt(subArray[l]));
            }
        }
    }
    console.log('sorted array', sortedArray)
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];

sortByHeight(a);