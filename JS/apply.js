let person1 ={
    name:"Abhijit",
    marks: 29,
    pass: function(college,time) {
        if(this.marks > 30) {
            console.log(this.name +" is failed : ", this.marks +"from " + college +"from ", time);
        } else {
            console.log(this.name +" is failed : ", this.marks +"from " + college );
        }
    }
}

let person2 ={
    name: "Abhi",
    marks: 35
}

let arr =["Bangalore", "2021"]

person1.pass.apply(person2,arr);


// polyfill of Apply

Function.prototype.myApply= function(args,data){
 const obj = args;
 obj.fn = this;
 obj.fn(...data);
}

person1.pass.myApply(person2,arr);