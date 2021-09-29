const a = [1, 2, 3]
const b = [1, 3, 2];
const c = [1, 3, 1];
const d = [3, 1, 2];
const e = [3, 1, 3];


a) comparar a[0] con a[1]
    a[1] es más grande que a[0]?
        SI --> a[2] es mas grande que a[1]?  //chequear length??
                    SI --> true
                    NO --> true porque se saca a[2] y ya es secuencial
        NO --> a[0] es igual o mas grande que a[2]?
                    SI --> a[2] es mas grande que a[1]? 
                            SI --> true porque entonces sacas a[0] y es secuencial
                            NO --> false 
                    NO --> 











function almostIncreasingSequence(sequence) {
    if (sequence.length === 1) {
        return true;
    }
    let flag = false;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i + 1] > sequence[i]) {
            continue;
        } else {
            if (flag) {
                return false;
            } else {
                flag = true;
                if (sequence[i + 2] <= sequence[i]) {
                    return false;
                }   
            }
        }
    }
    console.log(true);
    return true;
}

const arr = [1, 2, 3, 4, 3, 6];


almostIncreasingSequence(arr)