function sortByHeight(arr) {
    let treesIndex = [];
    let arrayCopy = [...arr];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
            treesIndex.push(i);
        }
    }
    arrayCopy.sort(function(a, b) {
        return a - b;
      });
    console.log(arrayCopy);
    let heightsArray = arrayCopy.filter(height => height !== -1);
    console.log(heightsArray);
    if (treesIndex.length) {
        for (let i = 0; i < treesIndex.length; i++) {
            heightsArray.splice(treesIndex[i], 0, -1);
        }
    }
    console.log(heightsArray);
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];
const b = [4, 2, 9, 11, 2, 16];
const c = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3];

sortByHeight(c);