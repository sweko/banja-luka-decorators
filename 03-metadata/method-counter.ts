export const callCounts: {[key:string]:number} = {};


export function CallMethodCounter (methodName?: string) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        methodName = methodName || propertyName;
        callCounts[methodName] = 0;
    
        return {
            ...descriptor,
            value: function (...args: any[]) {
                callCounts[methodName!] += 1;
                return descriptor.value.apply(this, args);
            }
        }
    }
}
