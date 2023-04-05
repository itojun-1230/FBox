export function initArray(num: number, action: Function) {
    //処理の結果が代入された配列を作成する
    return [...new Array(num)].map((elem ,i: number) => {
        return action(i);
    })
}