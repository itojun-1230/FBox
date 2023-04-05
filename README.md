# GP-function
汎用関数 - general purpose function
説明: 痒い所に手が届く関数たち 少しずつ増やしていきたい
repeat関数: num回処理を繰り返す
構文
GP_Array.repeat(num, (i) => {
    
})

repeatStep関数: startNumからendNumまでstepNum間隔で処理を繰り返す
構文
GP_repeat.repeatStep(startNum ,endNum ,stepNum, (i) => {
    
})

initArray関数: 処理の結果が代入された、要素数numの配列を作成する
構文
GP_repeat.initArray(num,(i)=>{
    return 3 * i
})
