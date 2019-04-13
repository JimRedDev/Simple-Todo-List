const todoOutput = document.querySelector('#todoOutput');
const todoInput = document.querySelector('#todoInput');
const submitBtn = document.querySelector('#submitBtn');
let todos = [];


document.addEventListener('click', (e) => {
    if(e.target.id === "submitBtn") {
        e.preventDefault();
        let todoText = todoInput.value;
        if(todoText) {
            todos.push(createTodo(todoText));
            // let newTodo = document.createElement('li');
            // newTodo.className = 'aTodo';
            // let todoContent = `${createCheckbox()} <span class="todoText">${todoText}</span> ${createDeleteButton()}`;
            // newTodo.innerHTML = todoContent;
            // todos.push(newTodo);
            todoInput.value = '';
            todoInput.focus();
            displayTodos(todos);
        }
    }

    if(e.target.className === 'delButton') {
        todos.splice(e.target.parentNode.id, 1);
        displayTodos();
    }

    if(e.target.className === 'chkSpan') {
        let target = e.target.parentNode.parentNode;
        if(todos[target.id].completed === false) {
            console.log('ok')
            target.childNodes[2].className = 'completed';
            todos[target.id].completed = true;
        } else {
            console.log('!ok');
            target.childNodes[2].className = 'todoText';
            todos[target.id].completed = false;
        }
    }

})

function createTodo(todoText) {
    return {
        'todo-text' : todoText,
        'completed': false
    }
}


function displayTodos() {
    todoOutput.innerHTML = '';
    todos.forEach((todoObj, position) => {
        let newTodo = document.createElement('li');
        newTodo.className = 'aTodo';
        let todoContent = `${createCheckbox()} <span class="todoText">${todoObj['todo-text']}</span> ${createDeleteButton()}`;
        newTodo.innerHTML = todoContent;
        newTodo.id = position;
        todoOutput.appendChild(newTodo);
    })
}

function createDeleteButton(){
    let delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.className = 'delButton';
    return delBtn.outerHTML;
}

function createCheckbox() {
    let chkLabel = document.createElement('label');
    let chkBox = document.createElement('input');
    let chkSpan = document.createElement('span');
    chkBox.setAttribute('type', 'checkbox');
    chkSpan.className = "chkSpan";
    chkLabel.appendChild(chkBox);
    chkLabel.appendChild(chkSpan);
    return chkLabel.outerHTML;
}