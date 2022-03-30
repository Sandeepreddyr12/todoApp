//selectors
const getInput = document.querySelector('.input');
const getBtn = document.querySelector('.btn');
const Container = document.querySelector('.todo-Container');
const todoLists = document.querySelector('.todo-lists');

//event-listners

getBtn.addEventListener('click',addtodo);
todoLists.addEventListener('click',deleteChecked);


//functions

function addtodo(e){

   //creating a div
   const newDiv = document.createElement('div');
   newDiv.className = 'container';
   todoLists.appendChild(newDiv);

// creating a lists
    const lists = document.createElement('li');
    todoLists.className = 'lists';
    lists.innerText = getInput.value;
    newDiv.appendChild(lists); 

    //completed button
    const completed = document.createElement('button');
    completed.className = 'completed';
    completed.innerText = '✔'
    newDiv.appendChild(completed);

    //delete button
    const deleted = document.createElement('button');
   deleted.classList.add('deleted-btn');
   deleted.innerText = '🗑'
   newDiv.appendChild(deleted);

//clearing inputs 
   getInput.value = "";
}

function deleteChecked(e){
    const Targets = e.target;
    //delete btn
    if(Targets.classList[0] === 'deleted-btn'){
        const container = Targets.parentElement;
        container.remove();
    }

// completed button

    if(Targets.classList[0] === 'completed'){
        const container = Targets.parentElement;
        container.classList.toggle('completed-mark');
    }
}

