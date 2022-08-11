// add linked lists stored in reverse order

const l1 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 9,
              next: null,
            },
          },
        },
      },
    },
  },
};

const l2 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: null,
      },
    },
  },
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  let p1 = l1;
  let p2 = l2;
  const list = new ListNode();
  let current = list;
  let carry = 0;
  while (p1 || p2 || carry) {
    const a = p1 && p1.val ? p1.val : 0;
    const b = p2 && p2.val ? p2.val : 0;
    const sum = a + b + carry;
    const newVal = sum > 9 ? sum % 10 : sum;
    carry = sum > 9 ? 1 : 0;
    current.next = new ListNode(newVal);
    current = current.next;
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }
  return list.next;
};

console.log(JSON.stringify(addTwoNumbers(l1, l2), null, 2));
