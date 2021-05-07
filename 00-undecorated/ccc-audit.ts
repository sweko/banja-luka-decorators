export const audit = (...args:any[]) => {
    console.log("[audit]", ...args);
};

type AnyFunc = (...args: any[]) => any;

export const decorateWithAudit = (func: AnyFunc, context: any):AnyFunc => {
    const result = {
        [func.name]: (...args:any[]) => {
            const methodName = `${context.constructor.name}.${func.name}`
            console.log("[audit]", methodName, ...args);
            return func.apply(context, args);
        }
    };
    return result[func.name];
}