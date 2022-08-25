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

var reverseList = function (head) {
  let current = head;
  let list = null;
  while (current) {
    list = { val: current.val, next: list };
    current = current.next;
  }
  return list;
};

console.log(reverseList(list));
