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

export function initArray(num: number, action: Function) {
    //処理の結果が代入された配列を作成する
    return [...new Array(num)].map((elem ,i: number) => {
        return action(i);
    })
}