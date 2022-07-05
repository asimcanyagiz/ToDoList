// UI elements
const taskDOM = document.querySelector("#task");
const listDOM = document.querySelector("#list");
const btnDOM = document.querySelector("#liveToastBtn");

///First we need the get all events with eventlistener
//Event Listener
eventListener();
function eventListener(){

    //DOM
    document.addEventListener('DOMContentLoaded', getTasks)
    //Task input
    taskDOM.addEventListener('keyup', filterTasks)
    btnDOM.addEventListener('submit', newElement)
    //List click
    listDOM.addEventListener('click',)
    //Button Click
    btnDOM.addEventListener('click', newElement)

}

//Function for add a task
function newElement() {

    const li = document.createElement('li')
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.appendChild(document.createTextNode(task.value))
    const link = document.createElement('a')
    link.innerHTML = `${'<i class="bi bi-x iClose"></i>'}`
    li.append(link)
    listDOM.appendChild(li)
    
    if(taskDOM.value === ''){
        console.log("Eksik")
    }else{        
        listDOM.appendChild(li)
        addLocalStorage(taskDOM.value)
    }

    taskDOM.value = "";
}

//Function for add elements to local storage
function addLocalStorage(task){
    
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks))

}

//Get elements from local storage and add them to main page
function getTasks(){
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(task => {
        const li = document.createElement('li')
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.appendChild(document.createTextNode(task))
        const link = document.createElement('a')
        link.innerHTML = `${'<i class="bi bi-x iClose"></i>'}`
        li.append(link)
        listDOM.appendChild(li)
    });
}

//Function for remove a task
function removeElement(event){

    if(event.target.parentElement.parentElement.classList.contains('list-group-item')){

        removeLocalStorage(event.target.parentElement.parentElement);
        event.target.parentElement.parentElement.remove();

    }

}

//Function for remove elements from local storage
function removeLocalStorage(taskItem){
    
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }


    tasks.forEach(function(task, index){

        if(taskItem.textContent == task){
            tasks.splice(index, 1);
        }
    });
    
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

//Filter Tasks
function filterTasks(item) {
    const text = item.target.value.toLowerCase();

    document.querySelectorAll('.list-group-item').forEach(task => {
        const item = task.textContent;
        if(item.toLowerCase().indexOf(text) == -1) {
            task.classList.remove('d-flex')
            task.classList.add('d-none')
        }else{
            task.classList.add('d-flex')
        }
    });
}