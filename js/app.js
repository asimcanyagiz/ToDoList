// UI elements
const taskDOM = document.querySelector("#task");
const listDOM = document.querySelector("#list");
const btnDOM = document.querySelector("#liveToastBtn");

///First we need the get all events with eventlistener
//Event Listener
eventListener();
function eventListener(){

    //Task input
    taskDOM.addEventListener('keyup',)
    //List click
    listDOM.addEventListener('click',)
    //Ekle Button Click
    btnDOM.addEventListener('submit',newElement())
}

//Function for add a task
function newElement() {

    const li = document.createElement('li')
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `${taskDOM.value} ${'<i class="bi bi-x iClose"></i>'}`;
    
    if(taskDOM.value === ''){
        console.log("Eksik")
    }else{        
        listDOM.appendChild(li)
    }
    
}