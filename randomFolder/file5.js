//google question- find first char in string

const FindChar = (str) => {
  const seen = new Set();

  for (const char of str) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }
};

const string = 'abcdefghia';
const CapString = string.toUpperCase();
const FirstRepeatChar = FindChar(CapString);
console.log(FirstRepeatChar);
