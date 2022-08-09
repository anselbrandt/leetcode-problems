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

function LinkedList() {
  this.next = null;
  this.length = 0;
}

LinkedList.prototype.prepend = function (val) {
  const newNode = new ListNode(val, this.next);
  this.next = newNode;
  this.length++;
};

LinkedList.prototype.append = function (val) {
  let current = this.next;
  while (current.val || current.val === 0) {
    if (current.next === null) {
      current.next = new ListNode(val);
      this.length++;
      return;
    }
    current = current.next;
  }
};

LinkedList.prototype.print = function () {
  let current = this.next;
  while (current.val || current.val === 0) {
    console.log(current.val);
    if (current.next === null) return;
    current = current.next;
  }
};

const list = new LinkedList();

list.prepend(1);
list.prepend(2);
list.prepend(3);
list.append(0);

console.log(JSON.stringify(list, null, 2));
list.print();
