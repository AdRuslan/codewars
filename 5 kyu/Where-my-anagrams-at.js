function anagrams(word, words) {
    let result = [];
    const sortedWord = [...word].sort().join('');

    words.forEach(item => {
        if (sortedWord === [...item].sort().join('')) result.push(item);
    });

    return result;
}

const solution = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']); //['aabb', 'bbaa']
console.log(solution);
