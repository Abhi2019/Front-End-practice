class promisePolyfill {
    isResolved = false;
    isRejected = false;
    onResolve;
    onReject;
    resolvedChain =[];
    
    constructor(cb){
      const resolve =(data)=> {
        this.isResolved = true;
        this.value = data;
        // if(this.resolvedChain.length) {
        //    this.resolvedChain.reduce((acc, fn)=>{
        //      return fn(acc);
        //    }, this.value);
        // }
      }
      const reject = (error)=>{
        this.isRejected = true;
        this.error = error;
        //  if(typeof this.onReject === 'function') {
        //    this.onReject(error);
        // }
      }
      cb(resolve, reject);
    }
    // then =(thenHandler)=>{
    //   //this.onResolve = thenHandler;
    //   this.resolvedChain.push(thenHandler);
    //     if(this.isResolved) {
    //        this.resolvedChain.reduce((acc, fn)=>{
    //          return fn(acc);
    //        }, this.value)
    //     }
    //     return this;
    // }
  
    // catch = (rejectHandler)=>{
    //   this.onReject = rejectHandler;
    //    if(this.isRejected) {
    //       this.onReject(this.error);
    //     }
    //     return this;
    // }
  }
  
  
  let p1 = new promisePolyfill((resolve, reject) => {
    // setTimeout(()=>{
    // resolve("2");
    // }, 2000)
    resolve("2");
  });
  
  console.log(p1);
  
//   p1.then((data) => {
//     console.log("resolve1 " + data);
//     return data*2;
//   }).then((data)=>{
//     console.log("resolve 2 " + data);
//   }).catch((error)=>{
//     console.log("catched", error);
//   });