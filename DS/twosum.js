let arr =[-1,0,1,2,-1,-4];
const target= 0;
let obj ={};

// for(let i =0; i< arr.length; i++){
//     let map = new Map();
//     let sum = target - arr[i];
//     for(let j =i+1; j < arr.length; j++){
//         let str = arr[i].toString() + arr[j].toString()+ (sum - arr[j]).toString();
//         if(map.get(sum-arr[j]) && obj[str] === undefined) {
//             console.log(arr[i], arr[j], sum - arr[j]);
//             obj[str] =1;
//         } else {
//             map.set(arr[j],1);
//         }
//     }
   
// }

//permutation:
// let str ="ABC";
// function perm(str){
//     if(str.length ==1){
//         return [str];
//     }
//     let arr =[];
//     for(let i=0; i < str.length; i++){
//         let first = str[i];
//         let remaining = str.slice(0,i)+str.slice(i+1, str.length);
//         let items = perm(remaining);
//         items.forEach((item)=>{
//             arr.push(first+item);
//         });
//     }
//     return arr;
// }

// console.log(perm(str));


//MergeSort

// let arr1 = [2,3,9,4,10,8];

// function merge(arr){
//  if(arr.length <2){
//     return arr;
//  }
// const mid = Math.floor((arr.length)/2);
// const l_merge = merge(arr.slice(0,mid));
// const r_merge = merge(arr.slice(mid,arr.length));
// return mergeSort(l_merge,r_merge);
// }
// function mergeSort(a,b) {
//  const c =[];
//  if(a && b) {
//     while(a.length && b.length){
//         if(a[0]> b[0]){
//             c.push(b.shift());
//         } else {
//             c.push(a.shift());
//         }
//     }
//     while(a.length){
//         c.push(a.shift());
//     }
//     while(b.length){
//         c.push(b.shift());
//     }
//  }
//  return c;
// }

// console.log(merge(arr1));

// let arr = [9, 4, 20, 10, 5,3], k1 = 33, sum =0, total=0;

// //subarray
// let map = new Map();
// map.set(0,1);
// for(let num of arr){
//     sum =sum+num;
//     total+= (map.get(sum-k1) ||0);
//     map.set(sum, (map.get(sum) || 0)+1);
// }

// console.log(total);


// let person1 ={
//     name:"Abhijit",
//     marks: 29,
//     pass: function(college,time) {
//         if(this.marks > 30) {
//             console.log(this.name +" is passed : ", this.marks +"from " + college +"from ", time);
//         } else {
//             console.log(this.name +" is failed : ", this.marks +"from " + college );
//         }
//     }
// }

// let person2 ={
//     name: "Abhi",
//     marks: 35
// }

// let b = person1.pass.bind(person2);
// b("abc","2022");
//console.log(b);

//person1.pass.call();

// Function.prototype.myApply = function(arg,data){
//     let obj = arg;
//     let fn = this
//     if(obj) {
//         obj.fn = this;
//         obj.fn(...data);
//     } else {
//         fn = this;
//         fn();
//     }
// }

// person1.pass.myApply(person2, ["aaa", "2022"]);

// Function.prototype.mybind = function(args){
//     let obj = args;
//     obj.fn = this;
//     return function(...param){
//         obj.fn(...param);
//     }
// }

// let b1 = person1.pass.mybind(person2);
// b1("abc","2022");

// function mul(a){
//     let sum = a;
//     return function fn(b) {
//     sum*=b;
//     fn.total = sum;
//     return fn;
//     }
// }

// function multiple(a,b,c){
//     return a*b*c;
// }

// function curryFunction(fn){

//     return function curry(...args1){
//         if(args1.length >= fn.length){
//             return fn.apply(this, args1);
//         } else {
//             return function(...arg2){
//                 return curry.apply(this, args1.concat(arg2));
//             }
//         }
//     }

// }

// const mul = curryFunction(multiple);

// console.log(mul(1)(2)(3));
// console.log(mul(1 ,2)(4));