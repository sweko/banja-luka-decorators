import { Person } from "./person";
import { createCounts } from "./class-counter";
import { callCounts } from "./method-counter";
import { Calculator } from "./calculator";

const weko = new Person("Wekoslav", "Stefanovski");

console.log(weko.getFullName());

console.log(callCounts);

Reflect.defineMetadata("description", "A class that offers common operations over two numbers", Calculator);
Reflect.defineMetadata("description", "Returns the result of adding two numbers", Calculator, "add");
Reflect.defineMetadata("description", "Returns the result of subtracting two numbers", Calculator, "subtract");
Reflect.defineMetadata("description", "Returns the result of dividing two numbers", Calculator, "divide");

function showDescriptions (target: any) {
    if (Reflect.hasMetadata("description", target)) {
        const classDescription = Reflect.getMetadata("description", target);
        console.log(`${target.name}: ${classDescription}`);
        const methodNames = Object.getOwnPropertyNames(target.prototype);
        for (const methodName of methodNames) {
            if (Reflect.hasMetadata("description", target, methodName)) {
                const description = Reflect.getMetadata("description", target, methodName);
                console.log(`  ${methodName}: ${description}`);
            }
        }
    }
}

showDescriptions(Calculator);
