class DoublyLinkedListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.head = null;
    this.tail = null;
    // this.head.next = this.tail;
    // this.tail.prev = this.head;
    this.map = new Map(); //the map key is the number, the value is the node itself!
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.removeNode(node);
      this.addToFront(node);
      return node.value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    //the new node whould be added to the head, since its the most hot/new data!
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value; //it may be that the key will remain but the value will be changed!
      this.removeNode(node);
      this.addToFront(node);
    } else {
      if (this.map.size === this.capacity) {
        // in case we exceeded the capacity
        const lastNode = this.tail;
        this.removeNode(lastNode);
        this.map.delete(lastNode.key);
      }
      const newNode = new DoublyLinkedListNode(key, value); //this block will happen
      this.addToFront(newNode);
      this.map.set(key, newNode);
    }
  }

  removeNode(node) {
    if (node.prev) node.prev.next = node.next;
    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node == this.tail) {
      //מקרה קצה שבו הנוד המוסר הוא הtail
      this.tail = node.prev;
    }
  }

  addToFront(node) {
    // node.prev = this.head;
    // node.next = this.head.next;
    // this.head.next.prev = node;
    // this.head.next = node;
    let oldHead = this.head;

    if (!oldHead) {
      this.tail = node;
    }

    if (oldHead) oldHead.prev = node;

    this.head = node;
    this.head.next = oldHead;
    this.head.prev = null;
  }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // returns 1
cache.put(3, 3);
console.log(cache.get(2)); // returns -1 (not found)
cache.put(4, 4);
