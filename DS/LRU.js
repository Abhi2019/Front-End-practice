class LRuCache {
    constructor(capacity){
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    tailRemove() {
    const node = this.tail.prev;
    this.removeNode(node);
    return node;
    }
    removeNode(node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    addTotheHead(node){
        node.next = this.head;
        node.prev = null;
        if(this.head!==null) {
            this.head.prev = node;
        }
        this.head = node;
    }
    moveToHead(node){
        this.removeNode(node);
        this.addTotheHead(node);
    }
   
    get(key) {
        const node = this.map.get(key);
        if(node === undefined) return -1;
        this.moveToHead(node);
        return node.value;
    }
    put(key,data){
        let node = this.map.get(key);
        if(node!== undefined){
            node.data = data;
            this.moveToHead(node);
        } else {
            let node = new Node(key, data);
            this.map.set(key, node);
            this.addTotheHead(node);
            if(this.map.size > this.capacity){
          
                // const removedNode = this.tailRemove();
                // console.log("Size: ", this.map.size , removedNode);
                // this.map.delete(removedNode.key);
            }
        }

    }
}

class Node {
    constructor(key =null, data =null){
        this.next = null;
        this.key = key;
        this.prev =null;
        this.data = data
    }
}

let a = new LRuCache(3);
a.put(1, "Abhijit");
a.put(2, "Abhi");
a.put(3, "Ab");
a.get(2);
console.log("AAA: ",a)
// 10->20->30->40
//30