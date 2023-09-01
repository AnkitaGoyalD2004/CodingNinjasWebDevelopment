let tasks = [];
const taskList = document.getElementById("list");
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function fetchToDos(){}

function addTaskToDom(task){
    const li = document.createElement('li');

    li.innerHTML = `
        <li>
          <input type="checkbox" id="${tasks.id}" ${tasks.done ? 'checked' : '' } class ="custom-checkbox">
          <label for="${tasks.id}"> ${tasks.id}</label>
          <img src="bin.svg" class="delete" data-id="${tasks.id}" />
        </li>
    `
    taskList.append(li);
}

// this function will actually helps to show the tasks on the screen
function renderList () {
    taskList.innerHTML = '';
    for(let i = 0 ; i<= tasks.length ; i++){
        addTaskToDom(tasks[i]);
    }
    tasksCounter.innerHTML = tasks.length;
} 

function toggleTask (taskId) {
    const task = tasks.filter(function(task){
        return task.id === taskId;
    });
    if(task.length > 0){
        const currentTask = task[0];
        currentTask.done  = (!currentTask.done);
        renderList();
        showNotification("Task toggled successfully");
        console.log("this is the error");
        return ;
    }
    showNotification(" could not toggle the task");
}

function deleteTask (taskId) {
    const newTask = task.filter(function(task){
        return task.id !== taskId;
    });
    tasks = newTask;
    renderList();
    showNotification("task deleted successfully");
}

function addTask (task) {
    if(task){
        tasks.push(task);
        renderList();
        showNotification("task added successfully");
        return;
    }
    showNotification("task can not be added successfully");
}

function showNotification(text) {
    alert(text);
}

function handleKeyPress(e){
 if(e.key === 'Enter'){
    const text = e.target.value;
    console.log('text' , text);

if(!text){
    showNotification("Task test can not be empty");
    return;
}
const task = {
    text ,
id:Date.now().toString(),
    done:false
}
e.target.value ='' ;
addTask(task);
 }
}
function handleClickListner(e){
    const target = e.target;
    console.log(target);
    if(target.className === 'delete'){
      const taskId = target.dataset.id;
      deleteTask(taskId);
    }else if(target.className === 'customCheckbox' )
}
addTaskInput.addEventListener('keyup',handleKeyPress )
document.addEventListener('click', handleClickListner);
