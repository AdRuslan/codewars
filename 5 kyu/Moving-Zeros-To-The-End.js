function moveZeros(arr) {
    let zeroCounter = 0;
    let result = []

    arr.forEach(item => {
        if (item === 0) zeroCounter += 1;
        else result.push(item)
    });

    while (zeroCounter > 0) {
        result.push(0);
        zeroCounter--;
    }

    return result;
}

const solution = moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ]); // [ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
console.log(solution);
