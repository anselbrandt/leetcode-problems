const s1 = "BADANAT";

const substr = (str) => {
  const chars = Array.from(str);
  let substrs = [];
  for (char in chars) {
    let sub = "";
    const prev = new Set();
    for (let i = char; i < chars.length; i++) {
      const current = chars[i];
      const seen = prev.has(current);
      if (seen) {
        continue;
      } else {
        prev.add(current);
      }
      sub = sub + current;
    }
    substrs.push(sub);
  }
  return substrs;
};

const longest = (arr) => {
  return arr.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });
};

console.log(longest(substr(s1)));
