class customPromise {
    value;
    onResolvefn =[];
    OnRejectfn =[];
    state ="Pending";
    constructor(cb){
        const onResolve = (args)=>{
            this.state ="Fulfilled";
            this.value = args;
            this.callback();
        }

        const onReject  = (args)=>{
            this.state ="Rejected";
            this.value = args;
            this.callback();
        }

        cb(onResolve, onReject)
    }

    callback = function(){
        if(this.state ==='Fulfilled') {
            this.onResolvefn.forEach(fn => {
                return fn.call(this, this.value)
            });
            this.onResolvefn =[];
        }
        if(this.state ==='Rejected') {
            this.OnRejectfn.forEach(fn => {
                return fn.call(this, this.value)
            });
            this.OnRejectfn =[];
        }
    }

    then = function(onresolve, onreject ){
        // onresolve && this.onResolvefn.push(onresolve);
        // onreject && this.OnRejectfn.push(onreject);
        // if(this.state === "Fulfilled") {
        //     this.callback();
        // }
        console.log("onresolve : ", onresolve);
        return new customPromise((resolve, reject)=>{
            console.log("Entered : ");
            this.onResolvefn.push((result)=>{
                console.log("result", result);
                if(result === null) {
                    resolve(result);
                    return;
                }
                try {
                    resolve(onresolve(result));
                }
                catch {
                    reject(result);
                }

            })

            this.callback();
        })
    }
}

let p = new customPromise((resolve, reject)=>{
    resolve("Abhijit");
});


p.then((data)=>{
    console.log("data", data);
    return data;
}).then((data)=>{
    console.log("data1", data);
})
