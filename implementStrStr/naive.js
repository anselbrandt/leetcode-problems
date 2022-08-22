// return index of first occurence, or -1
// longest prefix suffix

const haystack = "acat acgacacagt";
const needle = "acacagt";
// 8

// length of max prefix matching suffix
//              a  c  a  c  a  g  t
const prefix = [0, 0, 1, 2, 3, 0, 0];

const prefixGen = (needle) => {
  const table = [0];
  for (i in needle) {
    let max = 0;
    const slice = needle.slice(0, +i + 1);
    for (j in slice) {
      const suffix = slice.slice(slice.length - j, slice.length);
      const prefix = needle.slice(0, suffix.length);
      if (suffix === prefix && suffix.length > max) max = suffix.length;
    }
    if (+i > 0) table.push(max);
  }
  return table;
};

var strStr = function (haystack, needle) {
  if (needle === "") return -1;
  let index = -1;
  const table = prefixGen(needle);
  let i = 0;
  let j = 0;
  while (i < haystack.length) {
    const match = haystack[i] === needle[j];
    console.log(i, j, haystack[i], needle[j], match);
    if (match && j === 0) index = i;
    if (match) {
      i++;
      j++;
    } else {
      j = 0;
      i++;
    }
  }
  return index;
};

console.log(strStr(haystack, needle));
