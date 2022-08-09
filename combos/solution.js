var arr = ["apple", "banana", "lemon", "mango"];

function combos(arr) {
  const result = [];
  for (i in arr) {
    const slice = arr.slice(i);
    for (j in slice) {
      if (j !== 0 && slice[0] !== slice[j]) result.push([slice[0], slice[j]]);
    }
  }
  return result;
}

console.log(combos(arr));
