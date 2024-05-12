"use strict";
class students {
    // Name : string
    // Fathername : string
    // Age : number
    // Rollsno  : number
    constructor(name, fathename, age, rollsno) {
        this.name = name;
        this.fathename = fathename;
        this.age = age;
        this.rollsno = rollsno;
        // this.Name = name;
        // this.Fathername = fathename;
        // this.Age = age;
        // this.Rollsno = rollsno
    }
    statement1() {
        return `My name is ${this.name} My fahter name is ${this.fathename} i am ${this.age} year old & My rolls no ${this.rollsno} thank you!`;
    }
}
class female extends students {
    constructor(name, fathername, age, rollsno, housewife) {
        super(name, fathername, age, rollsno);
        this.housewife = housewife;
    }
    statement2() {
        return `My name is ${this.name} My fahter name is ${this.fathename} i am ${this.age} year old  My rolls no ${this.rollsno} & ${this.housewife} i am a housewife`;
    }
}
let students1 = new students("Ali", "Hamza", 28, 1234);
let students2 = new female("fizza", "Tariq Aziz", 23, 1235, "yes");
console.log(students1.statement1());
console.log(students2.statement2());
