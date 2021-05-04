
let todoInput = document.getElementById("todoInput");
let todoContainer = document.getElementById("todoContainer");

function addTodoItem() {
    let todoItem = document.createElement("div");
    todoItem.classList.add("todoItem");
    // Append text
    todoItem.appendChild(getTodoTextElement());
    // Append delete icon
    todoItem.appendChild(getRemoveIconElement());
    // Append to container
    todoContainer.appendChild(todoItem);
    todoInput.value = "";
}


function getTodoTextElement() {
    let textElement = document.createElement("p");
    textElement.innerText = todoInput.value;
    return textElement;
}

function getRemoveIconElement() {
    let iconElement = document.createElement("i");
    iconElement.classList.add("fas");
    iconElement.classList.add("fa-trash-alt");
    iconElement.addEventListener("click", (e) => {
        removeItem(e.target);
    });
    return iconElement;
}

function removeItem(item) {
    item.parentElement.remove();
}

todoInput.addEventListener("keypress", (e) => {
    if (e.key == 'Enter') { addTodoItem(); }
})