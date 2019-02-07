function addItemToList() {
    let itemInput = document.getElementById("item-input");
    const itemText = itemInput.value;

    let toDoContainer = document.getElementById("todo-container");
    let newItem = document.createElement("div");
    let clear = document.createElement("i");

    if(itemText === "") {

    } else {
        toDoContainer.appendChild(newItem);
        newItem.classList.add("todo-item");
        newItem.appendChild(document.createTextNode(itemText));
        newItem.onclick = function() {completeToDoItem(this)};
        newItem.classList.add("item");
        newItem.name = itemText;

        clear.appendChild(document.createTextNode("clear"));
        clear.classList.add("material-icons");
        clear.style.cssFloat = "right";
        clear.style.cursor = "default";
        newItem.appendChild(clear);

        itemInput.value = "";
    }
}

function completeToDoItem(e) {
    let completeContainer = document.getElementById("complete-container");
    let toDoContainer = document.getElementById("todo-container");

    toDoContainer.removeChild(e);
    completeContainer.appendChild(e);

    e.firstElementChild.innerText = "add";
    let itemInput = document.getElementById("item-input");
    itemInput.value = e.name;

    e.onclick = function() {
        addItemToList();
        completeContainer.removeChild(e);
    };
}

function showOrHideCompleted() {
    let completedContainer = document.getElementById("complete-container");

    if(completedContainer.style.display === "none") {
        completedContainer.style.display = "";
    } else {
        completedContainer.style.display = "none";
    }
}
