const str = "(()()))";

let open = 0;
let closed = 0;
for (brk of Array.from(str)) {
  if (brk === "(") {
    open = open + 1;
  }
  if (brk === ")") {
    closed = closed + 1;
  }
}

console.log(Math.abs(open - closed));
