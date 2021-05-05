export const audit = (...args:any[]) => {
    console.log("[audit]", ...args);
};

type AnyFunc = (...args: any[]) => any;

export const decorateWithAudit = (func: AnyFunc):AnyFunc => {
    return (...args:any[]) => {
        console.log("[audit]", ...args);
        return func(...args);
    }
}