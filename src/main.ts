export function repeat(num:number, action:Function){
    for (let i = 0; i < num; i++) {
        action(i);
    }
}

export function repeatStep(startNum:number, endNum:number, step:number, action:Function){
    for (let i = startNum; i <= endNum;i += step ){
        action(i);
    }
}

export function initArray(num: number, action: Function) {
    return [...new Array(num)].map((elem ,i: number) => {
        return action(i);
    })
}