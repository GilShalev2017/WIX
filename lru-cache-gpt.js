class DoublyLinkedListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// THIS Solution uses 2 place holders for head & tail
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.head = new DoublyLinkedListNode(null, null);
    this.tail = new DoublyLinkedListNode(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
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
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value; //it may be that the key will remain but the value will be replaced!
      this.removeNode(node);
      this.addToFront(node);
    } else {
      if (this.map.size === this.capacity) {
        // in case we exceeded the capacity
        const lastNode = this.tail.prev;
        this.removeNode(lastNode);
        this.map.delete(lastNode.key);
      }
      const newNode = new DoublyLinkedListNode(key, value); //this block will happen
      this.addToFront(newNode);
      this.map.set(key, newNode);
    }
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addToFront(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // returns 1
cache.put(3, 3);
console.log(cache.get(2)); // returns -1 (not found)
cache.put(4, 4);
