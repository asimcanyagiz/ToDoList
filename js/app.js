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
    taskDOM.addEventListener('keyup',)
    //List click
    listDOM.addEventListener('click',)
    //Ekle Button Click
    btnDOM.addEventListener('click',newElement)

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
        li.appendChild(document.createTextNode(task.value))
        li.innerHTML = `${task} `;
        const link = document.createElement('a')
        link.innerHTML = `${'<i class="bi bi-x iClose"></i>'}`
        li.append(link)
        listDOM.appendChild(li)
    });
}

//Function for remove a task
function removeElement(event){

    if(event.target.parentElement.parentElement.classList.contains('list-group-item')){

        event.target.parentElement.parentElement.remove();
        removeLocalStorage(event.target.parentElement.parentElement);

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
        console.log(task, index)
        if(taskItem.textContent == task){
            tasks.splice(index, 1);
        }
    });
    
    localStorage.setItem('tasks', JSON.stringify(tasks));

}