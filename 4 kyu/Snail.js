snail = function (array) {
    if (array[0].length === 0) return array[0];

    let result = [];

    let len = array.length;
    let margin = 0;


    while (len > 0) {
        if (len === 1) {
            result.push(array[margin][margin])
            break
        }

        for (let i = 0; i < len; i++) {
            result.push(array[margin][i + margin]);
        }

        for (let i = 1; i < len; i++) {
            result.push(array[i + margin][array[i].length - margin - 1]);
        }

        for (let i = len - 1; i > 0; i--) {
            result.push(array[len + margin - 1][i - 1 + margin]);
        }

        for (let i = len - 1; i > 1; i--) {
            result.push(array[i - 1 + margin][margin]);
        }


        margin += 1;
        len -= 2;
    }


    return result;
};

const solution = snail([[1, 2, 3],
                             [4, 5, 6],
                             [7, 8, 9]]);
// [1, 2, 3, 4, 5],
// [6, 7, 8, 9, 10],
// [11, 12, 13, 14, 15],
// [16, 17, 18, 19, 20],
// [21, 22, 23, 24, 25]]
console.log(solution);
