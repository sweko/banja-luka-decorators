

export function ParamDecorator (propName: string) {
    return function (target: any, propertyName: string, index: number) {
        console.log(target);
        console.log(propertyName);
        console.log(index);
    }
}