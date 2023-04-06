# Fbox
関数詰め合わせ - Function box
======================
説明: 痒い所に手が届く関数たち 少しずつ増やしていきたい  

**repeat関数**  
<sub>num回処理を繰り返す</sub>  
構文  
FboxRepeat.repeat(num, (i) => {  
      
});  

**repeatStep関数**  
<sub>startNumからendNumまでstepNum間隔で処理を繰り返す</sub>  
構文  
GP_repeat.repeatStep(startNum ,endNum ,stepNum, (i) => {  
    
});  

**initArray関数**  
<sub>処理の結果が代入された、要素数numの配列を作成する</sub>  
構文  
FboxArray.initArray(num,(i)=>{  
    return i;  
});  

**randomArray関数**  
<sub>配列をシャッフルする</sub>  
構文  
FboxArray.randomArray(array);  

**degreeToRadian関数**  
<sub>度をラジアンに変換する</sub>  
構文  
FboxMath.degreeToRadian(degree);  

**radianToDegree関数**  
<sub>ラジアンを度に変換する</sub>  
構文  
FboxMath.radianToDegree(radian);  

**floor関数**  
<sub>valueをstandの倍数に切り捨てる</sub>  
構文  
FboxMath.floor(value, stand);  

**timeMeasure関数**  
<sub>実行時間を計測する 返り値に実行時間が入る/sub>  
構文  
FboxSystem.timeMeasure(()=>{  
    
})