function pigIt(str) {
    const arr = str.split(' ').map(item => item.replace(/[^_\W]+/g)).map(item => item === 'undefined' ? undefined : item);

    str = str.split(' ').map((item, idx) => {
        if (!arr[idx]) {
            return item.split(' ').map(el => el.slice(1) + el[0] + 'ay').join(' ');
        } else return item;
    });

    return str.join(' ');
}

console.log(pigIt('Pig latin is cool !')); // igPay atinlay siay oolcay

//Хорошее решение:
function pigIt2(str) {
    return str.replace(/\w+/g, (w) => {
        return w.slice(1) + w[0] + 'ay';
    });
}
