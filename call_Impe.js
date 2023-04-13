function person(arg1, arg2, arg3) {
    console.log(this.name);
    console.log('現在的this是=>', this);
    console.log(`第一個參數：${arg1}`);
    console.log(`第二個參數：${arg2}`);
    console.log(`第三個參數：${arg3}`);
}

let egg = {
    name: '蛋老師',
    id : 18
};

function btnClick(){
   // person.call(egg);
   Object.prototype.newCall = function(obj){
    // newCall中現在的this是：person(){...}這個函數
    //console.log('newCall中現在的this是=>', this); 

    //如何將參數傳到person(){...}(也就是this，這裡的this就是person(){...}這個函數)
    // 先取得傳入這個newCall裡的參數('按讚', '訂閱', '分享')
    // 宣告一個存放從arguments取出參數的變數
    // 因為不知道使用者會用哪一個函數呼叫這個newCall，更不會知道使用者的函數需要傳入參數
    // 因此使用eval函數，配合arguments裡有幾筆就gen出幾筆丟給obj.p()的參數之程式碼字串片段
    // 例如，使用者的函數會有三個傳參，
    // 因此從arguments的長度是四，第一個參數是要綁定this的物件
    // 所以入參應該從1開始：(arguments[1],arguments[2],arguments[3])
    // 就會gen出這樣的程式碼字串片段：
    // 'arguments[1],arguments[2],arguments[3]'
    // 因為要丟給obj.p()執行，因此obj.p()也是程式碼字串片段的一部份
    // 變成這樣：
    // 'obj.p(arguments[1],arguments[2],arguments[3])'
    // 這裡obj代表egg，p就是person(){...}這個函數也就是這裡的this
    // 再將完畢的程式馬字串片段丟給eval函數執行
    // eval('obj.p(arguments[1],arguments[2],arguments[3])')

    let args = [];

    // 第一個參數是要綁定this的物件，因此跳過arguments[0]
    Array.from(arguments).forEach((element,index) => {
        if(index!==0) args.push(`arguments[${index}]`)
    });

    // 使用toString()，元素之間自然會用逗號隔開
    let argsStr = args.toString();

    // 組裝要丟給eval函數執行的程式碼字串片段
    invokePersonFunction_EvalStr = `obj.p(${argsStr})`;

    // p中存放person(){...}這個函數，這裡的this可理解為就是person(){...}這個函數
    obj.p = this;

    // 執行組裝好的程式碼字串片段
    // eval('obj.p(arguments[0],arguments[1],arguments[2])')
    eval(invokePersonFunction_EvalStr)

    //delete obj.p;
   };

   person.newCall(egg, '按讚', '訂閱', '分享');
}

