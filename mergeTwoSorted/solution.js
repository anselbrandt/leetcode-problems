// merge two linked lists

const l1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 7,
          next: {
            val: 9,
            next: {
              val: 10,
              next: null,
            },
          },
        },
      },
    },
  },
};

const l2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: {
        val: 5,
        next: null,
      },
    },
  },
};

const list1 = [1, 2, 4],
  list2 = [1, 3, 4];
// [1,1,2,3,4,4]

var mergeTwoLists = function (list1, list2) {
  const newlist = { val: null, next: null };
  let nl = newlist;
  let l1 = list1;
  let l2 = list2;
  while (l1 || l2) {
    nl.next = { val: 0, next: null };
    nl = nl.next;
    if ((l1 && l2 && l1.val < l2.val) || !l2) {
      nl.val = l1.val;
      l1 = l1.next;
    } else {
      nl.val = l2.val;
      l2 = l2.next;
    }
  }
  return newlist.next;
};

console.log(JSON.stringify(mergeTwoLists(l1, l2), null, 2));
