export const advancedExampleDebounce = (func: Function, waitMs = 0): Function => {
    let timeoutID: number | null = null;

    return function (this:any, ...args: any[]) {
        if (timeoutID !== null) {
            console.log('⚠️ debounced');
            clearTimeout(timeoutID);
        }

        timeoutID = setTimeout(() => {
            timeoutID = null;
            func.apply(this, args);
        }, waitMs);
    };
}
