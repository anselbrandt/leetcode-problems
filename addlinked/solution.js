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

const l3 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: {
        val: 9,
        next: null,
      },
    },
  },
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function addList(l1, l2) {
  const solution = new ListNode();
  let result = solution;
  let carry = 0;
  while (l1 || l2) {
    const a = l1 ? l1.val : 0;
    const b = l2 ? l2.val : 0;
    const sum = a + b + carry;
    const newVal = sum > 9 ? sum - 10 : sum;
    carry = sum > 9 ? 1 : 0;
    result.next = new ListNode(newVal);
    result = result.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return solution.next;
}

console.log(JSON.stringify(addList(l1, l3), null, 2));
