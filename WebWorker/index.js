const worker = new Worker("worker.js");
function background() {
  let divId = document.getElementById("worker");
  if (divId.style.backgroundColor !== "blue") {
    divId.style.backgroundColor = "blue";
  } else {
    divId.style.backgroundColor= "green";
  }
}


function calculation(){
    worker.postMessage("sum up");
}

worker.onmessage = (data)=>{
    alert(data.data);
}
