// import { performance } from "perf_hooks";

const stopwatch : {[key:string]:number} = {};

export const startDuration = (method: string) => {
    console.log(`[duration] ${method} started running`);
    //stopwatch[method] = performance.now();
}

export const stopDuration = (method: string) => {
    console.log(`[duration] ${method} stopped running`);
    // const start = stopwatch[method];
    // const end = performance.now();
    // console.log(`[duration] ${method} run duration ${end - start}`);
}

type AnyFunc = (...args: any[]) => any;

export const decorateWithDuration = (func: AnyFunc, context: any):AnyFunc => {
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