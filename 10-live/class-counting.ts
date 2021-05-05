export const counter: any = {people: 0};

export function ClassCountingDecorator (className: string) {
    return function (constructor: any) {
        const wrappedConstructor: any = function (...args: any[]) {
            const result = new constructor(...args);
            counter[className] += 1;
            return result;
        };

        wrappedConstructor.prototype = constructor.prototype;
        return wrappedConstructor;
    }
}