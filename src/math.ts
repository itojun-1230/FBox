export function degreeToRadian(degree: number) {
    //度をラジアンに変換
    return degree * (Math.PI / 180);
}
export function radianToDegree(radian: number) {
    //ラジアンを度に変換
    return radian * (180 / Math.PI);
}
export function floor(value: number , standValue: number){
    const Stand = Math.pow(10, standValue);
    return Math.floor(value * Stand) / Stand;
}

console.log(floor(1678.45,-2))