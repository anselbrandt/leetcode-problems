# Depth First Search (Recursive)

1. Out of bounds check, false node check (or null, or undefined)
2. Check against possible match and solution at same time, push to solutions array
3. DO NOT check for last node, allow to fail on next recursion
4. Mark visited
5. Reset visited
6. Return pushed solutions

```javascript
if (board[i] === undefined || board[i][j] === undefined || !current) return;
const letter = board[i][j];
if (current[letter] && current[letter]["word"]) {
  solutions.push(current[letter]["word"]);
  current[letter]["word"] = null;
}
board[i][j] = 0;
search(i + 1, j, board, current[letter], solutions);
search(i - 1, j, board, current[letter], solutions);
search(i, j + 1, board, current[letter], solutions);
search(i, j - 1, board, current[letter], solutions);
board[i][j] = letter;
if (solutions.length > 0) return solutions;
```
