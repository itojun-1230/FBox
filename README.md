# GP-function
汎用関数
説明: 痒い所に手が届く関数たち
repeat関数: num回処理を繰り返す
repeat(num, (i: number) => {
    
})

repeatStep関数: startNumからendNumまでstepNum間隔で処理を繰り返す
repeatStep(startNum ,endNum ,stepNum, (i: number) => {
    
})

initArray関数: 処理の結果が代入された、要素数numの配列を作成する
initArray(num,(i: number)=>{
    return 3 * i
})
