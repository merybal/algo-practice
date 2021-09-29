function allLongestStrings(inputArray) {
    let longestStringCount = 0;
    let longStringsArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longestStringCount) {
            longestStringCount = inputArray[i].length;
        }
    }
    for (let j = 0; j <inputArray.length; j++) {
        if (inputArray[j].length === longestStringCount) {
            longStringsArray.push(inputArray[j]);
        }
    }
    
    console.log(longStringsArray);
}
inputArray = ["aba", "aa", "ad", "vcd", "aba"]

allLongestStrings(inputArray)