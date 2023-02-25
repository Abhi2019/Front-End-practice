// function mul(a) {
// let m = a;
//  return function fn(b){
//     m=m*b;
//     fn.data = m;
//     return fn;
//  }
// }

//console.log(mul(2)(3)(4));

function multi(a,b,c){
    return a*b*c;
}

function curry(fn){
    return function fn1(...args){
        if(args.length >= fn.length) {
            return fn.apply(this,args )
        } else {
            return function(...agrs1) {
                return fn1.apply(this,args.concat(agrs1))
            }
        }
    }
1
}

let mul = curry(multi);
console.log(mul(1)(2)(3));
console.log(mul(1 ,2)(4));



