let person = {
  name: "Abhijit",
  age: 29,
  getMYMeds: function ( city,company) {
    console.log(this.name + " " + this.age + "from :" + city + "working in :" + company);
  },
};

let person1 = {
  name: "ABQ",
  age: 30,
};


person1.__proto__= person;
person1.getMYMeds('Kolkata', 'tcs');
Function.prototype.mycall = function (arg1, ...arg2) {
  console.log("arg2", arg2);
  let obj = arg1;
  obj.fn = this;
  obj.fn(...arg2);
};

Function.prototype.myApply = function (arg1, arg2) {
    console.log("arg2", arg2);
    let obj = arg1;
    obj.fn = this;
    obj.fn(...arg2);
  };

  Function.prototype.myBind = function(args) {
    let obj = args;
    obj.fn = this;
    return function(...args2){
        obj.fn(...args2);
    }
  }

// person.getMYMeds.myApply(person1, ['Kolkata', 'tcs']);
// let b = person.getMYMeds.myBind(person1);
// b('Kolkata', 'tcs');
// console.log(b);