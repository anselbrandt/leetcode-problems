// build reverse linked list

let list = null;
for (i in Array(5).fill()) {
  list = { val: i, next: list };
}

console.log(JSON.stringify(list, null, 2));
