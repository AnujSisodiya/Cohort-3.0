const inp = document.querySelector("input");
const btn = document.querySelector("#addbtn");
const main = document.querySelector("main");


btn.addEventListener("click", ()=>{
    const value = inp.value;
    if(value.trim() === "") return;
    addList(value);
})


function addList(value) {   

const todoList = document.createElement('div');
todoList.classList.add("todo-list");

const heading  = document.createElement("h3");
heading.textContent = `${value}`;

const btnContainer = document.createElement("div");


const editBtn = document.createElement("button");
editBtn.classList.add("btn", "edit");
editBtn.textContent = "Edit";

const delBtn = document.createElement("button");
delBtn.classList.add("btn","del");
delBtn.textContent = "Delete";

btnContainer.append(editBtn, delBtn);

todoList.append(heading, btnContainer);
document.querySelector("main").append(todoList);

inp.value = "";


editBtn.addEventListener("click", ()=>{
   const value = prompt("Enter Text");
    if(value.trim() === "") return;
       heading.textContent = `${value}`;
   
})

delBtn.addEventListener("click", ()=>{
    todoList.remove();
});

}

