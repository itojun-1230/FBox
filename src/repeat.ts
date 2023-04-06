export function repeat(num:number, action:Function){
    //一定数繰り返す
    if(num % 1 != 0){
        throw new Error("The number of times must be an integer");
    }

    for (let i = 0; i < num; i++) {
        action(i);
    }
}

export function repeatStep(startNum:number, endNum:number, step:number, action:Function){
    if(startNum % 1 != 0 || endNum % 1 != 0){
        throw new Error("The value of the range specification must be an integer number");
    }

    //範囲内を一定間隔で繰り返す
    for (let i = startNum; i <= endNum;i += step ){
        action(i);
    }
}