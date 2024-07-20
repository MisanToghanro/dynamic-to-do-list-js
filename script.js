//add event listner DOMContentLoaded to ensure javascript file loads after html
document.addEventListener("DOMContentLoaded" ,  function(){

// now select the addtask button, user input field , a list for the tasks
const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

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
removeTaskButton.className = "remove-btn";

//add event listner to removeTaskButton to remove list items from the task list when triggered
removeTaskButton.addEventListener("click" , function(){
    taskList.removeChild(listItems);
});

//append the removTaskButton to ListItems , then append ListItems to taskList
listItems.appendChild(removeTaskButton);
taskList.appendChild(listItems);

//clear input field
taskInput.value = "";
};

}
//add event listners
addButton.addEventListener( "click" , addTask);

taskInput.addEventListener("keypress" , function(event){
    if(event.key === "Enter"){
        addTask();
    }
});


});

