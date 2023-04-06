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
export function quadEquations(a1: number ,b1: number ,c1: number ,a2: number ,b2: number ,c2: number){
    //連立方程式
    //a1X + b1Y = c1
    //a2X + b2Y = c2

    const Matrix = [    //行列
      [a1, b1],
      [a2, b2]
    ];
    
    const Vector = [    //ベクトル
      c1,
      c2,
    ];

    const Inverse = 1 / (Matrix[0][0] * Matrix[1][1] - Matrix[1][0] * Matrix[0][1]);    //逆行列
    const Result = [
      (Matrix[1][1] * Vector[0] + -Matrix[0][1] * Vector[1]) * Inverse,
      (-Matrix[1][0] * Vector[0] + Matrix[0][0] * Vector[1]) * Inverse
    ];
    if (Inverse == Infinity) {
      return [1, 1];
    } else {
      return [Result[0], Result[1]];
    }
}