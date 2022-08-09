/*
generate all combinations of n sets of parens

for n = 3

[
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
]
*/

const generate = (n) => {
  const results = [];
  const gen = (l, r, partial) => {
    if (l > r) return;
    if (l === 0 && r === 0) results.push(partial);
    if (l > 0) gen(l - 1, r, partial + "(");
    if (r > 0) gen(l, r - 1, partial + ")");
  };
  gen(n, n, "");
  return results;
};

console.log(generate(3));
