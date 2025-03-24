// function addTodo(){
//     const inputElement = document.querySelector("input");
//     const value = inputElement.value;
//     console.log(value);
// }

// let ctr = 0;
// function stopWatch(){
//     const v = document.querySelectorAll("h4")[0];
//     v.innerHTML = ctr;
//     ctr = ctr+1;
// }

// setInterval(stopWatch, 1000);

function deleteEl(index){
    const element = document.getElementById("todo-"+index);
    document.getElementById("todoParent").removeChild(element);
}