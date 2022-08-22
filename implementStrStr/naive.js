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
  let index = -1;
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
