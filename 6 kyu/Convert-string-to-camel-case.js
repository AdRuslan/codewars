// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  if (str === '') return '';

  let result = '';
  const sep = str.includes('-') ? '-' : '_';
  strArr = str.split(sep);

  for (let i = 0; i < strArr.length; i++) {
    if (i === 0) result += strArr[0]
    else result += strArr[i][0].toUpperCase() + strArr[i].slice(1)
  }

  return result;
}

const res = toCamelCase('the_stealth_warrior');
console.log(res);
