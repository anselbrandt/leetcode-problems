// const head = head = [1,2,2,1]
// true

const head = { val: 1, next: { val: 2, next: { val: 2, next: { val: 1 } } } };

var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }
  let left = head;
  let right = prev;
  while (right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }
  return true;
};

console.log(isPalindrome(head));
