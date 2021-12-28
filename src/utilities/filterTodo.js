const filterTodo = (todos, status) => {
    switch (status) {
        case "ACTIVE":
            return todos.filter(todo => !todo.isComplete);
        case "DONE":
            return todos.filter(todo => todo.isComplete);
        default:
            return todos;
    }
};

export default filterTodo;
