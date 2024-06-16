import {advancedExampleDebounce} from "./advanced-example-debounce";

function doSmth(this: any, val: number) {
    this.value += val;
    console.log(`I'm adding ${val}... 🤓`);
}

const debouncedDoSmth = advancedExampleDebounce(doSmth, 1000);

const data = {
    value: 0,
    doSmth: debouncedDoSmth
}

export function runAdvancedExample() {
    data.doSmth(99);
    data.doSmth(99);
    data.doSmth(1);
    setTimeout(() => data.doSmth(10), 2000);
}

setTimeout(() => console.log('Final value:', data.value), 4000)
