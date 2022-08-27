const strMult = (int, str) => {
  let result = "";
  for (i in Array(int).fill()) {
    result = result + str;
  }
  return result;
};

console.log(strMult(3, "a"));
