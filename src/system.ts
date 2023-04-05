export function timeMeasure (action:Function){
    //実行時間計測
    const startTime = performance.now();
    action();
    const endTime = performance.now();
    return endTime - startTime;
}