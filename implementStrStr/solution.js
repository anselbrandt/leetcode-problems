// return index of first occurence, or -1
// longest prefix suffix

const haystack = "acat acgacacagt";
const needle = "acacagt";
// 8

// length of max prefix matching suffix
//              a  c  a  c  a  g  t
const prefix = [0, 0, 1, 2, 3, 0, 0];

var strStr = function (haystack, needle) {
  if (needle === "") return -1;
  const lps = [];
};

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

console.log(prefixGen(needle));
