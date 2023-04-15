function deepCopy(obj) {
    let newObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let val = obj[key];
        if (typeof val === 'object') {
          // 遞歸地調用深拷貝函式
          newObj[key] = deepCopy(val);
        } else {
          // 直接賦值
          newObj[key] = val;
        }
      }
    }
    return newObj;
  }

  function btnClick(){

    let obj1 = {
      name : 'David',
      age : 18,
      data:{
        d1 : 1,
        d2 : 2
      },
      func : function () {
        console.log('Deep copy function!!');
      }
    };

    let obj2 = deepCopy(obj1);
    obj2.age = 19;
    console.log(obj1, obj2);
    obj2.func();

  }