var arr = [1,1,0,-1,-1];


function plusMinus(arr) {
    var zeros = 0;
    var positives = 0;
    var negatives = 0;
    var arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        if (arr[i] > 0) {
            positives++;
        } else if (arr[i] < 0) {
            negatives++;
        } else {
            zeros++;
        };
    };

    console.log((positives / arrLength).toFixed(6));
    console.log((negatives / arrLength).toFixed(6));
    console.log((zeros / arrLength).toFixed(6));
};

plusMinus(arr);
