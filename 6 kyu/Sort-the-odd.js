function sortArray(array) {
    let idxArr = [];
    let oddArr = [];

    array.forEach((item, idx) => {
        if (Math.abs(item % 2) !== 0) {
            idxArr.push(idx);
            oddArr.push(item);
        }
    });

    oddArr.sort((a, b) => {
        return a - b;
    });
    console.log(oddArr);

    idxArr.forEach((item, idx) => {
        array[item] = oddArr[idx];
    });

    return array;
}

console.log(sortArray([ 1,3,2,8,5,4,11 ])); //[ 1, 11, 2, 8, 3, 4, 5 ]
