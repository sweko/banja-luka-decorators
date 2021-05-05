import 'reflect-metadata';

export function increaseCallCount(target: any, propertyKey: string) {
    if (Reflect.hasMetadata("call-count", target, propertyKey)) {
        const value = Reflect.getMetadata("call-count", target, propertyKey);
        Reflect.defineMetadata("call-count", value+1, target, propertyKey)
    } else {
        Reflect.defineMetadata("call-count", 1, target, propertyKey)
    }
}

export function increaseCreateCount(target: any) {
    if (Reflect.hasMetadata("create-count", target)) {
        const value = Reflect.getMetadata("create-count", target);
        Reflect.defineMetadata("create-count", value+1, target)
    } else {
        Reflect.defineMetadata("create-count", 1, target)
    }
}