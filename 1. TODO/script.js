//JS Code

//Variables

const taskInput = document.querySelector(".task-input input"),
filters = document.querySelectorAll(".filters span"),
clearAll = document.querySelector(".clear-btn"),
taskBox = document.querySelector(".task-box");

let editId;
let isEditable = false;

//getting localstorage todo-list
let todos = JSON.parse(localStorage.getItem("todo-list"));

//step-8 : clear All
clearAll.addEventListener("click", () => {
    todos.splice(0, todos.length); //Removing all the items
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showToDoList("all")
})
//step-7 : Filter
filters.forEach(btn => {
    btn.addEventListener("click", () =>{
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showToDoList(btn.id)
    })
});

//step-6
function editTask(taskId, taskName, filter){
    taskInput.value = taskName;
    editId = taskId;
    isEditable = true;
    showToDoList(filter);

}

//step-5
function deleteTask(deleteId, filter) {
    //removing selected task from arrays/todos
    todos.splice(deleteId,1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showToDoList(filter);
}

//step-4
function showMenu(selectedTask) {
    let menuDiv = selectedTask.parentElement.lastElementChild;
    menuDiv.classList.add("show");

    document.addEventListener("click", e=> {
        if(e.target.tagName != "I" || e.target != selectedTask) {
            menuDiv.classList.remove("show");
        }
    })
}

//step-3
function updateStatus(selectedTask) {
    let taskName = selectedTask.parentElement.lastElementChild;
    if(selectedTask.checked){
        taskName.classList.add("checked");
        todos[selectedTask.id].status = "completed";
    }else{
        taskName.classList.remove("checked");
        todos[selectedTask.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
}

//step-2
function showToDoList(filter){
    let liTag = "";
    if(todos){
        todos.forEach((todo, id) => {

            let isCompleted = todo.status == 'completed' ? "checked" : "";
            if(filter == todo.status || filter == "all") {
                // Template Literals
                    liTag += `
                    <li class="task">
                    <label for="${id}">
                        <input onclick="updateStatus(this)" type="checkbox" name="" id="${id}" ${isCompleted}>
                        <p class="${isCompleted}">${todo.name}</p>
                    </label>
                    <div class="settings">
                        <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                        <ul class="task-menu">
                            <li onclick='editTask(${id}, "${todo.name}", "${filter}")'><i class="uil uil-pen"></i>Edit</li>
                            <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
                        </ul>
                    </div>
                </li>
                `;
            }
            
        });
    }
    
    // If li isn't empty, insert this value inside taskbox else insert span
    taskBox.innerHTML = liTag || `<span>You dont't have any task here</span>`;
}

//step-1
taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if(e.key == "Enter" && userTask ){

        if(!isEditable){
            //If todos doesn't exist, pass an empty array to todos
            todos = !todos ? [] : todos
            let taskInfo = { name : userTask, status : "pending"};
            todos.push(taskInfo); //adding new task to todo
        }else {
            todos[editId].name = userTask;
            isEditable = false;
        }
        
        taskInput.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todos));

        showToDoList("all");
    }    
})
showToDoList("all");


