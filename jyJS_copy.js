 
function pay(){


  [cost, date] = [...arguments];
  
  console.log(arguments);
  console.log(`執行付款!! 支付了 ${cost} 元。支付時間：${date}`);
  console.log("this目前指向===> ", this)
  
}

function debounce(func, delay, cost, date){

  let timeouter;

  return function() {
    clearTimeout(timeouter);
    let context = this;
    //let args = arguments;
    timeouter = setTimeout(function(){
      func.apply(context, [cost, date]);
    }, delay)
  }
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', debounce(pay, 1000, 5000, '2023-04-07 08:59'))
//btn.addEventListener('click', clearDelay)


function clearDelay() {

  let timeouter = setTimeout(()=>{
    pay();
  }, 1000)

  // 清除延時就不會執行setTimeout裡面的程式
  clearTimeout(timeouter);
}


function p2 (){
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  const cities = [];
  fetch(endpoint)
    .then(blob => blob.json())
    .then(data => {
      console.log("data==>", data);
      cities.push(...data)
    });

  
}



async function p1 (){
  console.log("Strat");
  const result = await this.resolveAfter2Seconds(20);
  console.log(`End : ${result}`);
}


function AsyncResolveAfter2Seconds(x) {
      setTimeout(() => {
        return x;
      }, 2000);
  }

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

function getValueWithPromise() {
    this.resolveAfter2Seconds(20).then(value => {
        console.log(`promise result: ${value}`);
    });
    console.log('I will not wait until promise is resolved');
}





// function delayedAdd(n1, n2, str, delayTime){
//     return new Promise(function(res, rej){
//         window.setTimeout(function(){
//             console.log(str);
//             res(n1+n2);
//         }, delayTime)
//     });
// }

// function test(){
//     let p1 = delayedAdd(3, 4, "我是p1", 10000);
//     console.log("非同步1~~~~");
//     let p2 = delayedAdd(2, 3, "我是p2", 2000);

//     Promise.all([p1, p2]).then(function(r){
//         console.log("兩個皆已完成");
//     });

//     console.log("非同步2~~~~");
// }

/*
async function test(){
    let r1 = await delayedAdd(3, 4, "我是p1", 10000);
    let r2 = await delayedAdd(2, 3, "我是p2", 2000);
}
*/

//console.log(1-"1" || 1+"1" || 1*"1" || 1/"1");
//console.log(1-"1");
// console.log(1+"1");
// console.log(1*"1");
// console.log(1/"1");
//console.log(0 || 1000);

// var userLang = navigator.language || navigator.userLanguage; 

// console.log("The language is: " + navigator.language);
// console.log("The user language is: " + navigator.userLanguage);
// console.log("The user + language is: " + userLang);

// console.log(10+true);



// function test(){

    

//     let str1 = ">2.4";
//     let str2 = "<=3.5";

//     const words1 = str1.split(">");
//     const words2 = str1.split("<");
//     const words3 = str1.split("=");
//     const words4 = str1.split(">=");
//     const words5 = str1.split("<=");

//     const words11 = str2.split(">");
//     const words22 = str2.split("<");
//     const words33 = str2.split("=");
//     const words44 = str2.split(">=");
//     const words55 = str2.split("<=");

//     const words = [words11, words22, words33, words44, words55];

//     // console.log("====>" + isNaN(Number(words1[1])));


//     let valid;
//     words.forEach(w =>{
//         if(w.length == 2){
//             if(!isNaN(Number(w[1]))){
//                 valid = Number(w[1]);
//             }
//         }

//     });

//     if(valid != undefined)
//         console.log("===>" + valid);



// }

