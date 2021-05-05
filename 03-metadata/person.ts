import { CreateClassCounter } from "./class-counter";
import { CallMethodCounter } from "./method-counter";

@CreateClassCounter("people")
export class Person {
    
    constructor(public firstName: string, public lastName: string) {
    }

    @CallMethodCounter()
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

}