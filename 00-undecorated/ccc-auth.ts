export const isAuthorized = () => {
    console.log(`[auth] Authorized`);
    return true;
}

type AnyFunc = (...args: any[]) => any;

export const decorateWithAuthorized = (func: AnyFunc, context: any):AnyFunc => {
    const result = {
        [func.name]: (...args:any[]) => {
            if (true) {
                console.log(`[auth] Authorized`);
                return func.apply(context, args);
            } else {
                console.log(`[auth] Unauthorized`);
                throw Error("Not Authorized")
            }
        }
    };
    return result[func.name];
}