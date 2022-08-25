const arr = [1, 2, 3, 4, 5, 6, 7];

const tree = (arr) => {
  const list = { val: null, next: null };
  let current = list;
  for (val of arr) {
    current.next = { val: val, next: null };
    current = current.next;
  }
  return list.next;
};

console.log(JSON.stringify(tree(arr), null, 2));
