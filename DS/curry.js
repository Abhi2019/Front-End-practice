//mul(2)(3)(4)

function multiplication(a,b,c){
    return a*b*c;
}

function curry(fn){
    return function fn1(...agrs){
        console.log("logs: ",...agrs,fn.length);
        if(agrs.length >= fn.length){
            console.log("logs details: ",...agrs,fn.length);
            return fn.apply(this, agrs);
        } else {
            return function(...agrs1){
                console.log("logs1: ",...agrs1);
                return fn1.apply(this, agrs.concat(agrs1));
            }
        }
    }
}

let mul = curry(multiplication);

console.log(mul(2)(3)(4));