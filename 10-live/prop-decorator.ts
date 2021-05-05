export function PropDecorator (propName: string) {
    return function (target: any, propertyName: string) {
        console.log(target);
        console.log(propertyName);
    }
}