export const isAmmountValid = (value : number, direction: "up" | "down", balance: number) => {
    console.log(`[validation] started`);
    if (value <= 0) {
        console.log(`[validation] zero or negative ammount ${value}`)
        return false;
    }
    if (direction === "down" && value > balance) {
        console.log(`[validation] unable to withdraw ${value} on a balance of ${balance}`);
        return false;
    }
    console.log(`[validation] the operation is valid`)
    return true;
}

type AnyFunc = (...args: any[]) => any;

export const decorateWithValidation = (func: AnyFunc, context: any):AnyFunc => {
    const result = {
            [func.name]: (...args:any[]) => {
            const methodName = `${context.constructor.name}.${func.name}`
            console.log(`[duration] ${methodName} started running`);
            let result: any;
            try {
                result = func.apply(context, args);
            } finally {
                console.log(`[duration] ${methodName} stopped running`);
            }
            return result;
        }
    };
    return result[func.name];
}
