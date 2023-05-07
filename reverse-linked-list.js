class Node {
  next = null;
  value = -1;
  constructor(value, next) {
    this.next = next;
    this.value = value;
  }
}

const node1 = {
  next: null,
  value: 1,
};

const node2 = {
  next: null,
  value: 2,
};

const node3 = {
  next: null,
  value: 3,
};

node1.next = node2;
node2.next = node3;

let head = node1;

function printList(ptr) {
  while (ptr) {
    console.log(ptr.value);
    ptr = ptr.next;
  }
}

printList(head);

function reverse(node) {
  let tmp = node;
  let ptr = node.next;
  if (ptr == null) {
    head = tmp;
    return tmp;
  }

  return (reverse(ptr).next = tmp);
}

reverse(head).next = null;

printList(head);

function reverseIterative(head) {
  let previous = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}

head = reverseIterative(head);

printList(head);
