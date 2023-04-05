# GP-function
汎用関数 - general purpose function
======================
説明: 痒い所に手が届く関数たち 少しずつ増やしていきたい  

**repeat関数**  
<sub>num回処理を繰り返す</sub>  
構文  
GP_Array.repeat(num, (i) => {  
      
});  

**repeatStep関数**  
<sub>startNumからendNumまでstepNum間隔で処理を繰り返す</sub>  
構文  
GP_repeat.repeatStep(startNum ,endNum ,stepNum, (i) => {  
    
});  

**initArray関数**
<sub>処理の結果が代入された、要素数numの配列を作成する</sub>  
構文  
GP_repeat.initArray(num,(i)=>{  
    return i;  
});  

**randomArray関数**  
<sub>配列をシャッフルする</sub>  
構文  
GP_repeat.randomArray(array);  

**degreeToRadian関数**  
<sub>度をラジアンに変換する</sub>  
構文  
GP_math.degreeToRadian(degree);  

**radianToDegree関数**  
<sub>ラジアンを度に変換する</sub>  
構文  
GP_math.radianToDegree(radian);  

**timeMeasure関数**
<sub>実行時間を計測する 返り値に実行時間が入る/sub>  
構文
GP_system.timeMeasure(()=>{
    
})