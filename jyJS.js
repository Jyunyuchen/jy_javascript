var aaaa = {};
aaaa['a'] = { isEdit: true, name: 'David' };
//console.log(aaaa);
///////////////////////////////////////////////////////////////////
// interface numberIndex{
//     [index:number]:string;
//     name:string;
//     age:number;
// }
// let numberTest : numberIndex = {10:'a', 20:'b', 30:'c',name:'David',age:56}
// console.log(numberTest);


let obj = {
    name : "David",
    age : 18
};

console.log(obj);

Object.defineProperty(obj, 'id', {
	writable: false,
	configurable: false,
	enumerable: true,
	value: 1
});

//console.log(obj);

obj.id = 2;

//console.log(obj);

/**
 * 
 */