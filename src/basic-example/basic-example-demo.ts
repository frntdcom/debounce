import {basicExampleDebounce} from "./basic-example-debounce";

const doSmth = () => console.log(`I'm doing something... 🤓`);

const debouncedDoSmth = basicExampleDebounce(doSmth, 1000);

export const runBasicExample = () => {
    debouncedDoSmth();
    debouncedDoSmth();
    debouncedDoSmth();

    setTimeout(() => {
        debouncedDoSmth();
        debouncedDoSmth();
        debouncedDoSmth();
    }, 2000);
}
