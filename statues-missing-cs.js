function makeArrayConsecutive2(statues) {
    const max = statues.reduce(function(a, b) {
        return Math.max(a, b);
    });
    const min = statues.reduce(function(a, b) {
        return Math.min(a, b);
    });

    console.log(max - min);
    console.log(max - min - (statues.length - 2) - 1)
}

const arr = [6, 2, 3, 8];

makeArrayConsecutive2(arr);