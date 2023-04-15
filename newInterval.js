
let num = 0;

function newInterval(func, millisecond) {
    let timer = null;
    function insideRecursive() {
        func();
        clearTimeout(timer);
        timer = setTimeout(insideRecursive, millisecond);
        num++;
        if(num>=5) clearTimeout(timer);
    }
    timer = setTimeout(insideRecursive, millisecond);
}

function runTimer() {
    (function inner() {
        let t = setTimeout(() => {
            console.log(num + '.請點讚，目前時間：' + new Date().toLocaleTimeString());
            let total = 0;
            for (let index = 0; index <= 95000; index++) {
                const span = document.createElement('span');
                document.body.appendChild(span);
                document.body.removeChild(span);
                if(index===9500) total = 9500;
            }
            console.log(num + '.完成了' + total);
            num++;
            clearTimeout(t);
            inner();
        }, 1000);
    })();
}

function like() {
    console.log(num + '.請點讚，目前時間：' + new Date().toLocaleTimeString());
    let total = 0;
    for (let index = 0; index <= 95000; index++) {
        const span = document.createElement('span');
        document.body.appendChild(span);
        document.body.removeChild(span);
        if(index===9500) total = 9500;
    }
    console.log(num + '.完成了' + total);
}


function btnClick(){
    newInterval(like, 1000);

    // const timer = setInterval( () => {
    //     like();
    //     num++;
    //     if(num >= 5) clearInterval(timer);
    // }, 1000);

    //runTimer();

}