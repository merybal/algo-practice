const candles = [4,4,5,1,3];

function countCandles(candles) {
    let maxCandle = candles[0];
    let counter = 1;
    for (let i = 1; i < candles.length; i++) {
        if (candles[i] > maxCandle) {
            maxCandle = candles[i];
            counter = 1;
        } else if (candles[i] == maxCandle) {
            counter++;
        }
    };
    return counter;
}

countCandles(candles);