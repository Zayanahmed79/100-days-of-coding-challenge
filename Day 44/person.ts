
export class person {
    name : string;
    constructor(name : string){
        this.name = name
    }
    greet() {
        console.log(`Hello, How was your day Mr/s ${this.name}`);
        
    }
}

