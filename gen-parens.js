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

const genParens = (n) => {
  const solutions = [];

  const generate = (left, right, partial) => {
    if (left > right) return;
    if (!left && !right) solutions.push(partial);
    if (left > 0) generate(left - 1, right, partial + "(");
    if (right > 0) generate(left, right - 1, partial + ")");
  };

  generate(n, n, "");

  return solutions;
};

console.log(genParens(3));
