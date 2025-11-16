

const emptyArray = [];

function main() {
    console.log("Welcome to the TODO app!");
    var i = true;
    while (i)  {
        const next = prompt("\nWhat would you like to do? (1. add, 2. toggle, 3. delete, 4. list, 5. exit)");
        switch (next) {
            case "1":
                const text = prompt("Enter the todo text:");
                addTodo(text);
                break;
            case "2":
                const toggleIndex = parseInt(prompt("Enter the index of the todo to toggle:"));
                toggleTodo(toggleIndex);
                break;
            case "3":
                const deleteIndex = parseInt(prompt("Enter the index of the todo to delete:"));
                deleteTodo(deleteIndex);
                break;
            case "4":
                listTodos();
                break;
            case "5":
                i = false;
                break;
            default:
                console.log("Invalid option, please try again.");
        }
    }

}

class todo {
    constructor(id, text, done) {
        this.id = id;
        this.text = text;
        this.done = done;
    }
}

// addTodo, toggleTodo, deleteTodo, listTodos

function addTodo(text) {
    const todo = new todo(Date.now(), text, false);
    emptyArray.push(todo);
}

function toggleTodo(index) {
    emptyArray[index].done = !emptyArray[index].done;
}

function deleteTodo(index) {
    emptyArray.splice(index, 1);
}

function listTodos() {
    console.log("Current Todos:");
    emptyArray.forEach((todo, index) => {
        console.log(`${index}. [${todo.done ? "x" : " "}] ${todo.text}`);
    });
}

addTodo("Sample Todo 1");
addTodo("Sample Todo 2");
listTodos();
toggleTodo(0);
listTodos();
deleteTodo(1);
listTodos();