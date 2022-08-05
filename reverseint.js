const input = -123;
// -321

const reverse = (num) => {
  const abs = Math.abs(num);
  const chars = Array.from(abs.toString());
  const result = num < 0 ? ["-"] : [];
  for (let i = chars.length - 1; i >= 0; i--) {
    result.push(chars[i]);
  }
  return result.join("");
};

console.log(reverse(input));
