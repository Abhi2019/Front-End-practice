class MyPromise {
  state = "pending";
  value;
  OnResolvefn = [];
  OnRejectfn = [];
  constructor(cb) {
    const resolve = (data) => {
      this.value = data;
      this.state = "Fulfilled";
      this.callBack();
    };
    const reject = (data) => {
      this.value = data;
      this.state = "Rejected";
      this.callBack();
    };
    cb(resolve, reject);
  }
  callBack = () => {
    if (this.state === "Fulfilled") {
      this.OnResolvefn.forEach((fn) => {
        fn.call(this, this.value);
      });
      this.OnResolvefn = [];
    }
    if (this.state === "Rejected") {
      this.OnRejectfn.forEach((fn) => {
        fn.call(this, this.value);
      });
      this.OnRejectfn = [];
    }
  };

  then(onResolve, onReject) {
    // onResolve && this.OnResolvefn.push(onResolve);
    // if(this.state ==="Fulfilled") {
    //     this.callBack();
    // }
    return new MyPromise((resolve, reject)=>{
       // console.log("OnResolvefn result : ", onResolve,onReject, this.state);
        this.OnResolvefn.push((result)=>{
            if(onResolve === null) {
                resolve(result);
                return;
            }
            try {
                resolve(onResolve(result));
            } catch {
                reject(result);
            }
        });
        this.OnRejectfn.push((result)=>{
           // console.log("OnRejectfn result : ", result);
            if(onReject === null) {
                reject(result);
                return;
            }
            try {
                resolve(onReject(result))
            } catch{
                reject(result);
            }
        });
        this.callBack();
    })
  };
  catch(cb) {
      console.log("Checked :");
    //   if(this.state === 'Rejected') {
       return  this.then(undefined,cb);
     // }
   
  };

  finally(cb) {
    return this.then(
      result => {
        cb()
        return result
      },
      result => {
        cb()
        throw result
      }
    )
  }
}

let p = new MyPromise((resolve, reject)=>{
    reject('Abhi');
    // setTimeout(() => {
    //       resolve('Abhi');
    // }, 1000);
});

let p1 = new Promise((resolve, reject)=>{
    reject('Abhi');
    // setTimeout(() => {
    //       resolve('Abhi');
    // }, 1000);
});

// p.then((data)=>{
//     console.log("Promise1 : ", data);
// });
p.then((data)=>{
    console.log("Promise1 : ", data);
    return 'A'+data;
}).then((data1)=>{
    console.log("Promise2  : ", data1);
    return 'b'+data1;
}).catch((e)=>{
    console.log("catch :", e);
}).finally((ee)=>{
    console.log("finally :", ee);
})
// .then((data2)=>{
//     console.log("data2 : ", data2);
// })

// p1.then((data)=>{
//     console.log("Promise1 : ", data);
//     return 'A'+data;
// }).then((data1)=>{
//     console.log("data1 : ", data1);
//     return 'B'+data1
// }).catch((e)=>{
//     console.log("catch :", e);
// }).then((data2)=>{
//     console.log("data2 : ", data2);
// })