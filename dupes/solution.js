// return true if arr contains dupes
const arr = [1, 2, 3, 1];

const dupes = (arr) => {
  const set = new Set();
  for (num of arr) {
    const seen = set.has(num);
    if (seen) {
      return true;
    } else {
      set.add(num);
    }
  }
  return false;
};

console.log(dupes(arr));
