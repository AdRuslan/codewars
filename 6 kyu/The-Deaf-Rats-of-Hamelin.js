// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

const countDeafRats = function (town) {
  let errorCounter = 0;

  const pIdx = town.indexOf('P');
  const arr = town.split(' ').join('');
  const prev = arr.slice(0, pIdx).split('');
  const next = arr.slice(pIdx + 1).split('');

  for (let i = 0; i < prev.length - 1; i += 2) {
    if (prev[i] === 'O' && prev[i + 1] === '~') {
      errorCounter += 1;
    }
  }

  for (let i = 0; i < next.length - 1; i += 2) {
    if (next[i] === '~' && next[i + 1] === 'O') {
      errorCounter += 1;
    }
  }

  return errorCounter;
};

console.log(countDeafRats('~O ~O~O~OP~OO~~O'));
// некоторые тесты выдают ошибки
