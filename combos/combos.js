var arr = ["apple", "banana", "lemon", "mango"];

const combos = arr.flatMap((v, i) => arr.slice(i + 1).map((w) => [v, w]));
