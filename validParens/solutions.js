const input = "()[]{}";
// true

const input2 = "([]({()}[]))";

const valid = {
  "(": ")",
  "{": "}",
  "[": "]",
};

// push closing bracket onto stack, check next bracket against stack
const isValid = (s) => {
  const bracket = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let char of s) {
    if (bracket[char]) {
      stack.push(bracket[char]);
    } else {
      if (stack.pop() !== char) return false;
    }
  }
  if (stack.length > 0) return false;
  return true;
};

console.log(isValid(input2));
