const getterAndsetter = {
    get(){
        console.log("I am getter");
    },
    set(value){
        console.log(`I am setter, your value is ${value}`);
    }
};


let myFunc = (getterAndsetter) => {
    getterAndsetter.get();
};

myFunc(getterAndsetter);
myFunc = "ssss";


let obj1 = {id:1};

function change(obj2) {
    
}

change(obj1);
