import { increaseCreateCount } from "./metadata";

export function CreateClassCounter(className?: string) {
    return function(constructor: any) {
        className = className || constructor.name;
    
        const wrappedConstructor: any = function (...args: any[]) {
            const result = new constructor(...args);
            increaseCreateCount(constructor);
            return result;
        };
    
        wrappedConstructor.prototype = constructor.prototype;
        return wrappedConstructor;
    };
}

// export function CreateClassCounter(constructor: any) {
//     createCounts[constructor.name] = 0;

//     const wrappedConstructor: any = function (...args: any[]) {
//         const result = new constructor(...args);
//         createCounts[constructor.name] += 1;
//         return result;
//     };

//     wrappedConstructor.prototype = constructor.prototype;
//     return wrappedConstructor;
// };