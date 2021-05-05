import { CreateClassCounter } from "./class-counter";

@CreateClassCounter("people")
export class Person {
    
    constructor(public firstName: string, public lastName: string) {
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

}