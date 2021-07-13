const myname = 'nicolas'
const myage = 12
const suma = (a:number,b:number) =>{
    return a + b
}
suma(12,12)

class Persona {
    constructor(private age:number,public name:string){}

    getSumary(){
        return `My name is ${this.name} and i am ${this.age} years old`
    }
}

const Je = new Persona(18 , "Facundo") 