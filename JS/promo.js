const STATE = {
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
    PENDING: "pending",
  }
  
  class MyPromise {
    #thenCbs = []
    #catchCbs = []
    #state = STATE.PENDING
    #value
    #onSuccessBind = this.#onSuccess.bind(this)
    #onFailBind = this.#onFail.bind(this)
  
    constructor(cb) {
        cb(this.#onSuccessBind, this.#onFailBind)
    }
  
    #runCallbacks() {
      if (this.#state === STATE.FULFILLED) {
        this.#thenCbs.forEach(callback => {
          callback(this.#value)
        })
  
        this.#thenCbs = []
      }
  
      if (this.#state === STATE.REJECTED) {
        this.#catchCbs.forEach(callback => {
          callback(this.#value)
        })
  
        this.#catchCbs = []
      }
    }
  
    #onSuccess(value) {
      queueMicrotask(() => {
        this.#value = value
        this.#state = STATE.FULFILLED
        this.#runCallbacks()
      })
    }
  
    #onFail(value) {
      queueMicrotask(() => {
  
        this.#value = value
        this.#state = STATE.REJECTED
        this.#runCallbacks()
      })
    }
  
    then(thenCb, catchCb) {
      return new MyPromise((resolve, reject) => {
        this.#thenCbs.push(result => {
          if (thenCb == null) {
            resolve(result)
            return
          }
  
          try {
            resolve(thenCb(result))
          } catch (error) {
            reject(error)
          }
        })
  
        this.#catchCbs.push(result => {
          if (catchCb == null) {
            reject(result)
            return
          }
  
          try {
            resolve(catchCb(result))
          } catch (error) {
            reject(error)
          }
        })
  
        this.#runCallbacks()
      })
    }
  
    catch(cb) {
      return this.then(undefined, cb)
    }
  
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
  
  class UncaughtPromiseError extends Error {
    constructor(error) {
      super(error)
  
      this.stack = `(in promise) ${error.stack}`
    }
  }

  let p = new MyPromise((resolve, reject)=>{
    reject('Abhi');
    // setTimeout(() => {
    //       resolve('Abhi');
    // }, 1000);
});
  
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