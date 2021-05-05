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