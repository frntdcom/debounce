export const basicExampleDebounce = (func: Function, waitMs = 0): Function => {
    let timeoutID: number | null = null;

    return () => {
        if (timeoutID !== null) {
            console.log('⚠️ debounced');
            clearTimeout(timeoutID);
        }

        timeoutID = setTimeout(() => {
            timeoutID = null;
            func();
        }, waitMs);
    };
}
