
/**
 * 驗證陣列是傳址還是傳值
 */
function btnClick(){

    filterByIdInHasDeleteids();
    
}

/**
 * 要透過id過濾資料，又要把這個id與一堆id比較
 * 看這個id是不是不存在於這一堆id之中
 * 
 */
function filterByIdInHasDeleteids(){

    const todos = [
        {
          id:1,
          title:'Todo 01'
        },
        {
            id:2,
            title:'Todo 02'
        },
        {
            id:3,
            title:'Todo 03'
        }
    ];

    const hasDeleteIds = [4, 5, 6, 7, 8, 3];

    console.log("過濾前=>" + JSON.stringify(todos));

    const newTodos = todos.filter(todo => {
        // 使用 every 篩選
        // todo.id不等於hasDeleteIds中的全部ID則回傳true給filter
        // 表示這筆是要留下來的(未在已刪除的ID名單之中)
        return hasDeleteIds.every(hasDeleteId => todo.id !== hasDeleteId);
    });

    console.log("過濾後=>" + JSON.stringify(newTodos));


}


function mapAndArray(){
    let array = [1, 2, 3]
    console.log("修改前", array); // [1, 2, 3]
    // modifyArray(array); // 陣列是傳地址會修改到原陣列
    mapArray(array); // map不會修改到原陣列
    console.log("修改後", array); // [1, 2, 3]
}


function mapArray(array){

    let newArrary = array.map(item => {
        
        return item * 2
    });

    console.log("map==>", newArrary);
}

function modifyArray(array){

    array[0] = array[0] * 2;
    array[1] = array[1] * 2;
    array[2] = array[2] * 2;

}