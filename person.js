export class Person {

    constructor(name) {
        this.name = name;
    }

    greet(){
        console.log("Hola, ", this.name)
    }
}