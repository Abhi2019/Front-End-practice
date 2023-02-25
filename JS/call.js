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

person1.pass("ABC");

person1.pass.call(person2, "Kolkata", "2022");

//polyfill of call

Function.prototype.myCall = function(args,...data){
    let obj = args;
    obj.fn = this;
    obj.fn(...data);
}

person1.pass.myCall(person2, "Kolkata","2022");