class Node {
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
      this.size = 0;
      this.head = new Node(null, null);
      this.tail = new Node(null, null);
      this.head.next = this.tail;
      this.tail.prev = this.head;
      this.cache = new Map();
    }
  
    get(key) {
      if (this.cache.has(key)) {
        const node = this.cache.get(key);
        this.moveToHead(node);
        return node.value;
      }
      return -1;
    }
  
    put(key, value) {
      if (this.cache.has(key)) {
        const node = this.cache.get(key);
        node.value = value;
        this.moveToHead(node);
      } else {
        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.addToHead(newNode);
        this.size++;
  
        if (this.size > this.capacity) {
          const tailNode = this.removeTail();
          this.cache.delete(tailNode.key);
          this.size--;
        }
      }
    }
  
    moveToHead(node) {
      this.removeNode(node);
      this.addToHead(node);
    }
  
    removeNode(node) {
      const prevNode = node.prev;
      const nextNode = node.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
  
    addToHead(node) {
      const nextNode = this.head.next;
      this.head.next = node;
      node.prev = this.head;
      node.next = nextNode;
      nextNode.prev = node;
    }
  
    removeTail() {
      const tailNode = this.tail.prev;
      this.removeNode(tailNode);
      return tailNode;
    }
  }
  let d = new LRUCache(2);
  d.put(1,1);
  d.put(2,2);
  d.get(1);
  d.put(3,3);
  console.log(d.get(2));
//   d.get(2);
//   d.put(6,6);
//   console.log(d.cache);