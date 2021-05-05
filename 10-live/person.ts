import { ClassCountingDecorator } from "./class-counting";
import { MethodCountingDecorator } from "./method-counting";
import { PropDecorator } from "./prop-decorator";
import { ParamDecorator } from "./param-decorator";

@ClassCountingDecorator("people")
export class Person {

    @PropDecorator("age")
    public age: number;
    
    constructor(public firstName: string, public lastName: string) {
        this.age = 0;
    }

    @MethodCountingDecorator("get-full-name")
    getFullName(@ParamDecorator("title") title: string = "Mr.") {
        return `${title} ${this.firstName} ${this.lastName}`;
    }

}