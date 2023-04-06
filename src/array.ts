export function initArray(num: number, action: Function) {
    //処理の結果が代入された配列を作成する
    if(num % 1 != 0){
        throw new Error("The number of array elements must be an integer");
    }
    return [...new Array(num)].map((elem ,i: number) => {
        return action(i);
    })
}
export function randomArray<T>(array: T[]) { 
    //配列をランダムに入れ替える
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];    //Fisher-Yates
      }
      return array;
}