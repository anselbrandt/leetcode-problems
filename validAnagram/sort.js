const s = "anagram",
  t = "nagaram";

var isAnagram = function (s, t) {
  if (Array.from(s).sort().join("") == Array.from(t).sort().join(""))
    return true;
  return false;
};

console.log(isAnagram(s, t));
