//promise => then , catch, finally
// Promise state => pending,reject, fulfilled

// setTimeout(()=>{
//     console.log("tag2");
// },1000);

// const data = new Promise((resolve, reject)=>{
//     console.log("tag");
//     setTimeout(()=>{
//         console.log("tag3");
//     }, 1000);
//     resolve("2");
// });

const data = new Promise((resolve, reject)=>{
    resolve("2");
});
// console.log("tag1");


const data1 = Promise.resolve("www");
const data2 = Promise.reject("error122");
const data3 = Promise.resolve("woow");

// Promise.allSettled([data1,data3, data2]).then((result)=>{
//     console.log("The datas are : ", result);
// }).catch((error)=>{
//     console.log("Error : ", error);
// });
// // console.log(data1);

// data.then((data)=>{
//     console.log("Promised", data);
// })

// class promisePolyfill {
//   onResolve;
//   onReject;
//   value;
//   isResolved = false;
//   isRejected = false;
//   resolvedChain =[];
//   constructor(cb){
//     const resolve = (data)=>{
//         this.isResolved = true;
//         this.value = data;
//         // if(typeof this.onResolve === 'function'){
//         //     this.onResolve(this.value);
//         // }
//     }

//     const reject = (error)=>{
//         this.isRejected = true;
//         this.value = error;
//         if(typeof this.onReject === 'function'){
//             this.onResolve(this.value);
//         }
//     }
//     cb(resolve,reject);
//   }

//   then = (thenHandler)=>{
//     // this.onResolve = thenHandler;
//     // console.log("called", this.isResolved);
//     // if(this.isResolved) {
//     //     this.onResolve(this.value);
//     // }
//     this.resolvedChain.push(thenHandler);
//     if(this.isResolved) {
//         this.resolvedChain.reduce((acc, fn)=>{
//             return fn(acc);
//         }, this.value)
//     }
//    return this;
//   }
//   catch = (catchHandler)=>{
//     this.onReject = catchHandler;
//     if(this.isRejected) {
//         this.onReject(this.value);
//     }
//     return this;
//   }

//   finally = (finallyHandler)=>{
//     this.onReject = finallyHandler;
//     this.onResolve = finallyHandler;
//     if(this.isResolved) {
//         this.onResolve(finallyHandler);
//     }
//     if(this.isRejected) {
//         this.onReject(finallyHandler);
//     }
//   }
// }

// const p = new promisePolyfill((resolve)=>{
//     //    setTimeout(()=>{
//     // resolve("2");
//     // }, 2000);
//     resolve("2");
// });
// p.then((data)=>{
//     console.log(" Value is : ", data);
//     return 2*data;
// }).then((test)=>{
//     console.log("tested", test);
// })
// console.log(p)

function PromiseALL(arr) {
    return new Promise((resolve, reject)=>{
        let arr1 =[];
        function checkPromise(data) {
            arr1.push(data);
            if(arr1.length === arr.length) {
                resolve(arr1);
            }
        }
        arr.forEach(promisedata => {
            promisedata.then((data)=>{
                checkPromise(data);
            }).catch((error)=>{
                reject(error);
            })
        });
    });
}

PromiseALL([data1,data3,data2]).then((result)=>{
    console.log("The datas are : ", result);
}).catch((error)=>{
    console.log("Error : ", error);
});




class CustomePromise {
    state ="pending";
     onSucesss =[]; onReject =[];
    constructor(excutor){
        const onResolve = (args)=>{
            this.state = "Fulfilled";
            this.onSucesss.forEach((fn)=>{
               return fn.call(this,args);
            });
        }
        const Onreject = (err)=>{
            this.state = "Rejcted";
            this.onReject.forEach((fn)=>{
                return fn.call(this, err);
             });
        }

        excutor(onResolve, Onreject);
    }

    then = function (onSuccessfn, onRejectfn){
        if(this.state === "pending"){
            onSuccessfn && this.onSucesss.push(onSuccessfn);
            onRejectfn && this.onReject.push(onRejectfn);
        }

    }
    catch = function(onRejectfn){
        return this.then(undefined, onRejectfn);
    }

    static all = (arr)=> {
       return new CustomePromise((resolve, reject) =>{
        let arr1 =[], count =0;
        const checkAllPromise = (item, i )=>{
            arr1[i] = item;
            count++;
            if(count === arr.length) {
                resolve(arr1);
            }
        }
             arr.forEach((promise, i)=>{
                promise.then((data)=>{
                    checkAllPromise(data, i)
            })
        })
       }) 
    }
}

// const b = new CustomePromise((resolve, reject)=>{
//      console.log(resolve, reject);
// })

let p = new CustomePromise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Resolved");
    },4000);
});

let p1 = new CustomePromise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Resolved1");
    },2000);
});

//console.log("p ", p)

p.then((data)=>{
    console.log(data); //
});

p.then((data)=>{
    console.log(data); //
});

const a =[];
a[5] ="str";

CustomePromise.all([p,p1]).then((data)=>{
    console.log("PromsieAll", data);
}); 

// p.then((data)=>{
//     console.log("second", data);
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Resolved2");
//         },2000);
//     })
// }).then((data)=>{
//     console.log("third", data);
// });