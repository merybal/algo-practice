function matrixElementsSum(matrix) {
    let sum = 0;
    let blockedColumns = [];
    for (let i = 0; i < matrix.length; i++) { //recorro array grande
        for (let j = 0; j < matrix[i].length; j++) { //recorro subarrays
            if (matrix[i][j] === 0) { //si hay un 0 en la primer fila
                blockedColumns.push(j);  //almacena la posicion de el 0 en un array
            }
            if (!blockedColumns.includes(j)) {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}
 