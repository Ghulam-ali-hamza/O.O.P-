#! /usr/bin/env node
class students {
    // Name : string
    // Fathername : string
    // Age : number
    // Rollsno  : number

    constructor (public name:string,public fathename:string,public age:number ,public rollsno :number) {
    // this.Name = name;
    // this.Fathername = fathename;
    // this.Age = age;
    // this.Rollsno = rollsno
    }
    statement1 (): string | number {
        return `My name is ${this.name} My fahter name is ${this.fathename} i am ${this.age} year old & My rolls no ${this.rollsno} thank you!`
    }
}   
    class female extends students{
        housewife: string
        constructor(name:string, fathername:string, age:number , rollsno :number,housewife:string){
            super(name,fathername,age,rollsno)
            this.housewife = housewife
        }
        statement2 (): string | number {
            return `My name is ${this.name} My fahter name is ${this.fathename} i am ${this.age} year old  My rolls no ${this.rollsno} & ${this.housewife} i am a housewife`
        }
}
    let students1:students=new students ("Ali","Hamza",28,1234);
    let students2:female=new female ("fizza", "Tariq Aziz",23,1235,"yes")
    console.log(students1.statement1 ())
    console.log(students2.statement2 ())