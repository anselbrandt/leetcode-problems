// longest repeat length 4
const arr = [1, 1, 2, 2, 2, 2, 3, 3, 3];

const repeat = (arr) => {
  let prevChar = undefined;
  let count = 0;
  let highCount = 0;
  let highChar = undefined;
  for (char of arr) {
    if (prevChar === undefined || prevChar === char) {
      prevChar = char;
      count++;
    } else {
      highCount = count;
      highChar = prevChar;
      count = 1;
      prevChar = char;
    }
  }
  return {
    char: highChar,
    count: highCount,
  };
};

const result = repeat(arr);

console.log(result);
