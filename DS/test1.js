let arr =[1,2,3,4,5,6,7,8];
let target =8;
let hashMap = new Map();
for(let i =0; i < arr.length; i++){
    if(hashMap.get(target -arr[i])){
        console.log(target -arr[i], arr[i]);
    } else {
        hashMap.set(arr[i],1);
    }
}

for(let i =0 ; i < arr.length; i++) {
    let hashMap = new Map();
    let t = target- arr[i];
    for(let j =i+1; j < arr.length; j++) {
        if(hashMap.get(t- arr[j])){
            console.log(t- arr[j],arr[i],arr[j]);
        } else {
            hashMap.set(arr[j],1);
        }
    }
}
//permutation
//ABC => ABC, ACB, BAC, BCA, CAB, CBA;
let str = "ABC"
function perm(str){
 if(str.length ===1){
    return [str];
 }
 let arr =[];
 for(let i =0; i < str.length; i++){
    let first = str[i];
    let remain = str.slice(0,i)+  str.slice(i+1, str.length);
    let p = perm(remain);
    p.forEach((i)=>{
        arr.push(first+i);
    });
 }
 return arr;
}
console.log(perm(str));

let arr1 = [2,3,9,4,10,8];

function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let l = mergeSort(arr.slice(0,mid))
    let r = mergeSort(arr.slice(mid, arr.length));
    return merge(l,r)
}

function merge(a, b){
    let c =[];
    if(a && b) {
        while(a.length && b.length) {
            if(a[0]> b[0]){
                c.push(b.shift());
            } else {
                c.push(a.shift());
            }
        }
        while(a.length) {
            c.push(a.shift());
        }

        while(b.length) {
            c.push(b.shift());
        }

    }
    return c;
}



console.log(mergeSort(arr1));


function createNode(data){
    this.data = data;
    this.next =null;
}

function addNode(node,data) {
    if(node==null){
        node = new createNode(data);
    } else {
        node.next = addNode(node.next, data)
    }
    return node;
}


function reverseNode(node){
    let node1 =node, prev =null,temp;
    while(node1!==null){
        temp = node1.next;
        node1.next = prev;
        prev = node1;
        node1 = temp;
    }
    node = prev;
    return node;
}


function printNode(node){
    while(node!==null){
        console.log(node.data, "=>");
        node = node.next;
    }
}

let node = new createNode(10);
node = addNode(node,20);
node = addNode(node,30);
node = addNode(node,40);
printNode(node);
node = reverseNode(node);
printNode(node);