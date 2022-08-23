// return index of first occurence, or -1
// longest prefix suffix

// const haystack = "acat acgacacagt";
// const needle = "acacagt";
// 8

const haystack = "mississippi";
const needle = "issip";

// length of max prefix matching suffix
//              a  c  a  c  a  g  t
const prefix = [0, 0, 1, 2, 3, 0, 0];

// add var to indicate full match
// naive skipping will fail
// must use kmp to move backwards
var strStr = function (haystack, needle) {
  if (needle === "") return -1;
  let index = -1;
  let complete = false;
  let i = 0;
  let j = 0;
  while (i < haystack.length) {
    const match = haystack[i] === needle[j];
    console.log(i, j, haystack[i], needle[j], match);
    if (match && j === 0 && index === -1) index = i;
    if (match && j === needle.length - 1) {
      complete = true;
      return index;
    }
    if (match) {
      i++;
      j++;
    } else {
      index = -1;
      j = 0;
      i++;
    }
  }
  if (complete) return true;
  return -1;
};

console.log(strStr(haystack, needle));
