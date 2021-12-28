import { ADD_TODO, FILTER_TODO, MARK_DONE, REMOVE_TODO } from "../actions/types";

const init = {
    todos: [
        {
            title: "Untitled",
            description: "Empty",
            isComplete: false,
            id: 156846
        },
        {
            title: "Untitled-2",
            description: "Still Empty",
            isComplete: true,
            id: 144567
        }
    ],
    filter: "ALL"
};

const removeTodo = (todos, id) => {
    return (todos = todos.filter(todo => todo.id !== id));
};

const Todos = (state = init, action) => {
    switch (action.type) {
        case ADD_TODO: {
            let todos = [...state.todos, action.payload];
            return {
                ...state,
                todos
            };
        }
        case MARK_DONE: {
            let todos = [...state.todos];
            todos = todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.isComplete = !todo.isComplete;
                }
                return todo;
            });
            return {
                ...state,
                todos
            };
        }
        case FILTER_TODO: {
            return {
                ...state,
                filter: action.payload
            };
        }
        case REMOVE_TODO: {
            const todos = removeTodo(state.todos, action.payload);
            return {
                ...state,
                todos
            };
        }
        default:
            return state;
    }
};

export default Todos;
