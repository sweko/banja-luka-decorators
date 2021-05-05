export const mcounter: any = {};

export function MethodCountingDecorator (methodName: string) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {

        methodName = methodName || propertyName;
        mcounter[methodName] = 0;
    
        return {
            ...descriptor,
            value: function (...args: any[]) {
                mcounter[methodName!] += 1;
                return descriptor.value.apply(this, args);
            }
        }

    }
}