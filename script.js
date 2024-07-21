//add event listner DOMContentLoaded to ensure javascript file loads after html
document.addEventListener("DOMContentLoaded" ,  function(){

// now select the addtask button, user input field , a list for the tasks
const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");


function loadTasks(){
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach(taskText => {
        addTask(taskText , false)
    });
}


//create a function for the add task button
function addTask(){

// now retrieve and trim value from the user input field
let taskText = taskInput.value.trim();


if (taskText === "" ){
alert("please enter a task");
return;
}
else{
//create list item
const listItems = document.createElement("li");
listItems.textContent = taskText;


//create button for removing tasks
const removeTaskButton = document.createElement("button");
removeTaskButton.textContent = "Remove";
removeTaskButton.classList.add = "remove-btn";

//add event listner to removeTaskButton to remove list items from the task list when triggered
removeTaskButton.addEventListener("click" , function(){
    taskList.removeChild(listItems);
    removeTaskButtonFromLocalStorage(taskText);
});

//append the removTaskButton to ListItems , then append ListItems to taskList
listItems.appendChild(removeTaskButton);
taskList.appendChild(listItems);

if(save) {
    saveTaskToLocalStorage(taskText);
}

//clear input field
taskInput.value = "";
};
}

//save a task to localstorage
function saveTaskToLocalStorage(taskText) {
    const storedTasks = JSON.parse( localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskText);
    localStorage.setItem("tasks" , JSON.stringify(storedTasks));
}

//remove a task from local storage 
function removeTaskButtonFromLocalStorage(taskText){
    let storedTasks = JSON.parse(localStorage.getItem ("tasks") || "[]");
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem("tasks" , JSON.stringify(storedTasks));
}


//add event listners
addButton.addEventListener( "click" , addTask);

taskInput.addEventListener("keypress" , function(event){
    if(event.key === "Enter"){
        addTask();
    }
});

loadTasks();
});

