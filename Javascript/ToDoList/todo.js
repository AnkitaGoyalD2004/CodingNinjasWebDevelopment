const tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function renderList () {}

function markTaskAsComplete (taskId) {}

function deleteTask (taskId) {}

function addTask (task) {}

function showNotification(text) {
    alert(text);
}

function handleKeyPress(e){
 if(e.key === 'Enter'){
    const text = e.target.value;

if(!text){
    showNotification("Task test can not be empty");
    return;
}
 }
}
addTaskInput.addEventListener('keyup',handleKeyPress )