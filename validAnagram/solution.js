const s = "anagram",
  t = "nagaram";

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const smap = new Map();
  for (char of s) {
    if (smap.has(char)) {
      smap.set(char, smap.get(char) + 1);
    } else {
      smap.set(char, 1);
    }
  }
  const tmap = new Map();
  for (char of t) {
    if (tmap.has(char)) {
      tmap.set(char, tmap.get(char) + 1);
    } else {
      tmap.set(char, 1);
    }
  }
  let result = true;
  for (char of tmap) {
    if (!smap.has(char[0]) || smap.get(char[0]) !== char[1]) result = false;
  }
  return result;
};

console.log(isAnagram(s, t));
