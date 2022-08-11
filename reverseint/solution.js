const input = -123;
// -321

const reverse = (int) => {
  const reversed = Array.from(Math.abs(int).toString()).reverse().join("");
  if (reversed > Math.pow(2, 31) - 1) return 0;
  return int < 0 ? +reversed * -1 : +reversed;
};

console.log(reverse(input));
