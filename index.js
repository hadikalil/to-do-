const inputBar = document.getElementById("inputBar")
const tasksDiv = document.getElementsByClassName("to-do-ul")
const addButton = document.getElementsByTagName("button")[0]
const todoDiv = document.getElementById("to-do-ul")
const completedDiv = document.getElementById("completed-ul")


const tasksObject = {}


////////////// creat task element  \\\\\\\\\\\\\
const newTaskElement = function(taskStr) {

	// List Item
	var listItem = document.createElement("li");

	//input (checkbox)
	var checkBox = document.createElement("input"); 
	//label
	var label = document.createElement("label");
	//input (text)
	var editInput = document.createElement("input"); // text
	//button.edit
	var editButton = document.createElement("button");
	//button.delete
    var deleteButton = document.createElement("button");
    

        // elements tazpet add classes and type and innertext 
        
    checkBox.type = "checkbox";
    editInput.type = "text"

    editButton.innerText = "Edit"
    editButton.className = "edit"
    deleteButton.innerText = "Delete"
    deleteButton.className = "delete"

    label.innerText = taskStr


	//needs to append all the needed childerns with the needed order to the list item 
    listItem.appendChild(checkBox)
    listItem.appendChild(label)
    listItem.appendChild(editInput)
    listItem.appendChild(editButton)
    listItem.appendChild(deleteButton)
    
    return listItem    
}



//////////////// add new task \\\\\\\\\\\\\\\\\\\
const addNewTask = function () {
    const textInput = inputBar.value
    console.log(textInput);
    const listItem = newTaskElement(textInput)
    console.log(listItem);
    todoDiv.appendChild(listItem)
    bindTaskEvents(listItem, taskCompleted);

    inputBar.value=""
}

//////////////// add the task to to do \\\\\\\\\\\\\\\\\\
const taskCompleted = function () {
    console.log("Task complete...");
	//Append the task list item to the #completed-tasks
	var listItem = this.parentNode;
	completedDiv.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);

}

//////////////// mark Complete move to completed div \\\\\\\\\\\\\\\\\\
const taskIncomplete = function () {
	console.log("Task incomplete...");
	//Append the task list item to the #incomplete-tasks
	var listItem = this.parentNode;
	todoDiv.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

}
//////////////// delete ask \\\\\\\\\\\\\\\\\\\\\
const deleteTask = function () {
    console.log("Delete task...");

    var listItem = this.parentNode;
	var ul = listItem.parentNode;

	//Remove the parent list item from the ul
	ul.removeChild(listItem);
}

const editTask = function () {
    console.log("Edit task...");

    const listItem = this.parentNode
    const editInput = listItem.querySelector("input[type=text]")
    const tasklabel = listItem.querySelector("label")
        //  console.log("editInput",editInput)
        //  console.log("list iteem ", listItem);


 

     const checkClass  = listItem.classList.contains("editMood")
    
    // console.log("listItem"+listItem);
    // console.log("editInput"+editInput);
    console.log("tasklabel"+tasklabel.innerText);
    // console.log("taskStr"+taskStr);

    
    if (checkClass) {
        tasklabel.innerText = editInput.value
    }else{
        editInput.value = tasklabel.innerText
    }       
    listItem.classList.toggle("editMood")
}








//////////////// Event Listeners \\\\\\\\\\\\\\\\

addButton.addEventListener("click", addNewTask);

const bindTaskEvents = function (taskListItem, checkBoxEventHandler) {

    // select the item element
    console.log("bindTaskEvents fun");
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector(".edit");
	var deleteButton = taskListItem.querySelector(".delete");

    //bind editTask function  to editButton 
	editButton.onclick = editTask; //TODO: editTask function 

	//bind deleteTask to delete button
	deleteButton.onclick = deleteTask;   //TODO: deletTask function 

	//bind checkBoxEventHandler to checkbox
	checkBox.onchange = checkBoxEventHandler;   //TODO: taskCompleted function  and taskIncomplete function
}
