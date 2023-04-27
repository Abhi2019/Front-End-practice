let person ={
    name: "Abhijit",
    fear: 'yes',
    fight() {
        return 'Yes I can do'
    },
    sing() {
        return `I ${this.name} singing`
    }
}

let person1 = {
    name :"XYZ",
    fight(){
        return 1;
    }
}

person1.__proto__ = person;

console.log(person1.sing(), person1.fear);

class Prototype1 {
    constructor(name){
        this.name = name;
    }
    sing() {
        console.log(`I ${this.name} can sing`)
    }
    dance(){
        console.log("Danced");
    }
}

class child extends Prototype1 {
    constructor(name){
        super(name);
    }
}

let p = new Prototype1("abhijit");
p.sing();
p.dance();

let c = new child("aaa");
c.sing();

console.log(c);