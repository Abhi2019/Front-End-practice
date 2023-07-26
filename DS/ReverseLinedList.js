function createnode(data){
    this.data = data;
    this.next =null;
}


function addNode(node,data)
{
    if(node=== null) {
        return new createnode(data);
    } else {
        node.next = addNode(node.next,data);
    }
    return node;
}

function print(node){

    while(node!==null){
        console.log("->",node.data);
        node=node.next;
    }
}

var rotateRight = function(head, k) {
    let len=1;

    let node1 = head;
    while(node1.next!==null && len++) {
        node1 = node1.next;
    }
    node1.next = head;
    k = len -k;
    while(k!==0){
        node1 = node1.next;
        k--;
    }
    head = node1.next;
    node1.next = null;
    return head;
    
};

function reverse(node){
    let node1=node, temp, prev=null;
    while(node1!==null){
        temp = node1.next;
        node1.next =prev;
        prev=node1;
        node1=temp;
    }
    node =prev;
    return node;
}

let node1= new createnode(10);
let k =2;
node1= addNode(node1, 20);
node1= addNode(node1, 30);
node1= addNode(node1, 40);
node1= addNode(node1, 50);
node1= addNode(node1, 60);
// print(node1);
node1 = rotateRight(node1,k);
// console.log("reversed");
// node1 =reverse(node1);
print(node1);
//10-20-30-40-50-60
//50-60-10-20-30-40