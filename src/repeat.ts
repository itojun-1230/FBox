export function repeat(num:number, action:Function){
    //一定数繰り返す
    for (let i = 0; i < num; i++) {
        action(i);
    }
}

export function repeatStep(startNum:number, endNum:number, step:number, action:Function){
    //範囲内を一定間隔で繰り返す
    for (let i = startNum; i <= endNum;i += step ){
        action(i);
    }
}