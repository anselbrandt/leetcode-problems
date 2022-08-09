const obj = {};
let ref = obj;

for (i in Array(10).fill()) {
  Object.assign(ref, { val: i, next: {} });
  ref = ref.next;
}

console.log(obj);
