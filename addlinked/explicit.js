// add linked lists stored in reverse order

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};

const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const addLinked = (l1, l2) => {
  let p1 = l1;
  let p2 = l2;
  let num1 = 0;
  let num2 = 0;
  let carry = 0;
  let solution = new ListNode(0);
  let current = solution;

  while (p1 || p2) {
    num1 = p1 ? p1.val : 0;
    num2 = p2 ? p2.val : 0;
    if (num1 + num2 + carry > 9) {
      current.next = new ListNode(num1 + num2 + carry - 10);
      current = current.next;
      carry = 1;
    } else {
      current.next = new ListNode(num1 + num2 + carry);
      current = current.next;
      carry = 0;
    }
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }
  if (carry) current.next = new ListNode(carry);
  return solution.next;
};

console.log(addLinked(l1, l2));
