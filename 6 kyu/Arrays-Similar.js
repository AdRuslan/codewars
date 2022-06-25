function arraysSimilar(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let result = true;
    let map = new Map();

    arr1.forEach(item => {
        if (map.has(item)) map.set(item, map.get(item) + 1);
        else map.set(item, 1);
    });

    arr2.forEach(item => {
        if (map.has(item)) map.set(item, map.get(item) - 1);
    });

    for (let item of map.values()) {
        if (item !== 0) result = false
    }

    return result;
}

console.log(arraysSimilar([57,71,13,24], [13,71,57,24]));
