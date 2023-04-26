function like() {
    console.log(num + '.請點讚，目前時間：' + new Date().toLocaleTimeString());
}

// 模擬一個外部條件，滿足此條件就中斷runTimer
let num = 0;

// 用 setTimeout 實現 setInterval
function runTimer(func){
    let timer = null;
    // 使用立即函數，runTimer被呼叫後，
    // 立即執行inner函數以啟動遞迴不斷調用自身的機制
    (function inner() {
        num++;
        func();
        timer = setTimeout(inner, 2000);
        if(num >= 5) clearTimeout(timer);
    })();
}


function btnClick(){
    runTimer(like);
}