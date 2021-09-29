const n = 6;


function staircase(n) {
    let stair = '';
    for (let i = 0; i < n; i++) {
        console.log(stair.padStart((n - i - 1), ' ') + stair.padEnd((i+1), '#'));
    }
};

staircase(n);
staircase(3);
staircase(12);