import { expose } from "comlink";

function takeALongTimeToDoSomething() {
    console.log('Start our long running job...');
    const arr = [];
    let i = 1;
    const start = new Date().getTime();
    while (true) {
        arr.push(Math.round(Math.random()*11111111).toFixed(3));
        i++;
        if (i > 1000000) {
            break;
        }
    }
    // console.log(arr);
    setTimeout(()=> {
        console.log('dluga operacja sie wykonala');
    },3000);
    
    const stop = new Date().getTime();
    const took = stop - start;
    console.log(`Took ${took}`);
    return arr;
}

const exports = {
  takeALongTimeToDoSomething
};

expose(exports);