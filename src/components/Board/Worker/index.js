import { expose } from "comlink";

function takeALongTimeToDoSomething() {
    console.log('Start our long running job...');
    const arr = [];
    let i = 1;
    const start = new Date().getTime();
    while (true) {
        arr.push(i);
        i++;
        if (i > 50000000) {
            break;
        }
    }
    const stop = new Date().getTime();
    const took = stop - start;
    console.log(`Took ${took}`);
}

const exports = {
  takeALongTimeToDoSomething
};

expose(exports);