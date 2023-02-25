onmessage = (message)=>{
    console.log("message", message);
    let s=0;
    for(let i=0; i < 10000000000; i++){
        s+=i;
    }
    postMessage(s);
}

// let code = workercode.toString();
// code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

// const blob = new Blob([code], {type: "application/javascript"});
// const worker_script = URL.createObjectURL(blob);

// module.exports = worker_script;