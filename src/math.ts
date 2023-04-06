export function degreeToRadian(degree: number) {
    //度をラジアンに変換
    return degree * (Math.PI / 180);
}
export function radianToDegree(radian: number) {
    //ラジアンを度に変換
    return radian * (180 / Math.PI);
}
export function floor(value: number , standValue: number){
    //切り捨て
    if(standValue % 1 != 0){
        throw new Error("Stand value must be an integer");
    }
    const Stand = Math.pow(10, standValue);
    return Math.floor(value * Stand) / Stand;
}
export function round(value: number , standValue: number){
    //四捨五入
    if(standValue % 1 != 0){
        throw new Error("Stand value must be an integer");
    }
    const Stand = Math.pow(10, standValue);
    return Math.round(value * Stand) / Stand;
}
export function rangeRandom(minValue: number, maxValue: number){
    //範囲ランダム
    if(maxValue < minValue){
        throw new Error("Minimum value is greater than maximum value");
    }
    return Math.floor(Math.random() * maxValue) + minValue
}