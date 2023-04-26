function testFunc() {

  let funcName = 'David';
  let funcAge;
  let funcAry = [1, 2, 3];
  let funcObj = {a : 1, b : 2, c :3};

  if(true){
    let inIf = 'In if!!';
    console.log(inIf);
  }
}



// 此為專門複製物件，所以第一次傳入的isObj必須為true
function deepCopy(obj, isAry=false, isObj=true) {
    let newObj = {};
    let newAry = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let val = obj[key];
        if(Array.isArray(val)){
          if(isAry){
            newAry[key] = deepCopy(val, true, false);
          }
          else{
            newObj[key] = deepCopy(val, true, false);
          }
        }
        else if (typeof val === 'object') {
          // 遞歸地調用深拷貝函式
          if(isObj){
            newObj[key] = deepCopy(val, false, true);
          } else{
            newAry[key] = deepCopy(val, false, true);
          }
        } else {
          // 直接賦值
          if(isAry){
            newAry[key] = val;
          }
          else{
            newObj[key] = val;
          }
        }
      }
    }
    if(isAry){
      return newAry;
    }
    else{
      return newObj;
    }
    
  }

function btnClick(){

  //p2();
  p1();
  //p3(testFunc);

  

}

function p3(func){

  for(let key in func){
    console.log(key);
  }
}

function p2() {
  let newObj = [];
  let ary = ['David', 'Ken', 'John'];
  for(let key in ary){
    console.log('key=>' + key);
    let val = ary[key];
    newObj[key] = val;
  }
  console.log('result==>', newObj);
}

function p1() {
    
 let obj1 = {
      name : 'David',
      age : 18,
      ary1 : ['Ken', 'John'],
      data1:{
        d1 : 1,
        d2 : 2,
        aryInObj : ['001', '002', '003',{obj1:'obj1', obj2:'obj2'}]
      },
      func : function () {
        console.log('Deep copy function!!');
        (function inFunc () {
          console.log('Deep copy function in func!!');
        })();
      },
      ary2 : ['@@@@', '%%%%', '$$$$', [11, 22, 33], {a:'a1', b:'b2', c:[0, 'hello', true]}],
      data2:{
        dd1 : 3,
        dd2 : 4,
        dd3 : 5,
        subData2 : {
          subDD1 : 10,
          subDD2 : 20,
          subDD3 : 30
        },
        funcInObj : function () {
          console.log('function in Obj!!');
        }
      },
    }

   /*let obj1 = {
      name : 'David',
      age : 18,
      data2:{
        dd1 : 3,
        dd2 : 4,
        dd3 : 5,
      },
    }*/

    let obj2 = deepCopy(obj1);
    //let obj2 = Object.assign({},obj1);
    //let obj2 = _.cloneDeep(obj1);
    //obj2.age = 19;
    console.log(obj1, obj2);
    console.log(obj1===obj2);
    console.log(_.isEqual(obj1, obj2));
    console.log(obj1.func === obj2.func);
    console.log(obj1.data2 === obj2.data2);
  }