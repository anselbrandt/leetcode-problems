const s = "3[a]2[bc]";
//return "aaabcbc"

const s1 = "3[a2[c]]";
//return "accaccacc"

const s2 = "2[abc]3[cd]ef";
//return "abcabccdcdcdef"

var decodeString = function (s) {
  const chars = [...s];
  let multiply = [];
  let tempMult = "";
  let repeatStr = [];
  let solution = "";
  for (char of chars) {
    switch (true) {
      case !isNaN(char):
        tempMult = tempMult + char;
        break;
      case char === "[":
        multiply.push(tempMult);
        tempMult = "";

        repeatStr.push(solution);
        solution = "";
        break;
      case char === "]":
        solution = repeatStr.pop() + solution.repeat(multiply.pop());
        break;
      default:
        solution = solution + char;
    }
  }
  return solution;
};

console.log(decodeString(s1));
