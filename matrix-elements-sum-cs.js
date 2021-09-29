function matrixElementsSum(matrix) {
    let sum = 0;
    let blockedColumns = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                blockedColumns.push(j);
            }
            if (!blockedColumns.includes(j)) {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}
 