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

let b = person1.pass.bind(person2);
b("ABC","Mumbai");

//polyfill of bind

Function.prototype.myBind = function(args) {
    let obj = args;
    obj.fn = this;
    return function(...data) {
        obj.fn(...data);
    }
}

let b1 = person1.pass.bind(person2);
b1("ABC","Bankura");
