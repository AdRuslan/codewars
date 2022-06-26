function humanReadable (seconds) {
    let sec = seconds % 60
    let min = Math.floor(seconds / 60) % 60;
    let hours = Math.floor(seconds / 3600);

    function prependZeros(num) {
        return ('0' + num).slice(-2)
    }

    return prependZeros(hours) + ':' + prependZeros(min) + ':' + prependZeros(sec)
}

const solution = humanReadable(359999); // true
console.log(solution);
