const list = { val: 0, next: null };

let current = list;

for (i in Array(3).fill()) {
  console.log(current);
  current.val = i;
  current.next = { val: 0, next: null };
  current = current.next;
}

console.log(list);
/*
{
  "val": "0",
  "next": {
    "val": "1",
    "next": {
      "val": "2",
      "next": {
        "val": 0,
        "next": null
      }
    }
  }
}
*/
console.log(current);
/*
{
  "val": 0,
  "next": null
}
*/
