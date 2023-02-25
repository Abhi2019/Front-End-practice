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
node1= addNode(node1, 20);
node1= addNode(node1, 30);
node1= addNode(node1, 40);

print(node1);
console.log("reversed");
node1 =reverse(node1);
print(node1);
