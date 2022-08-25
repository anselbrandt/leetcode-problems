const head = [1, 2, 3, 4, 5];

const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

const list2 = {
  val: 1,
  next: {
    val: 2,
    next: null,
  },
};

const reverse = (head) => {
  if (!head || !head.next) {
    return head;
  }
  let current = reverse(head.next);
  console.log(head.val, current);
  head.next.next = head;
  head.next = null;
  return current;
};

var reverseList = function (head) {
  return reverse(head);
};

console.log(reverseList(list));
