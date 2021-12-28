import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { markDone, deleteTodo } from "../../store/actions/todoActions";
import filterTodo from "../../utilities/filterTodo";

const TodoList = props => {
    const { todos, markDone, status, deleteTodo } = props;

    if (!todos.length) return <p>Nėra sukurtų užduočių</p>;

    const filterTodos = filterTodo(todos, status);
    console.log(filterTodos);
    return (
        <ListGroup>
            {filterTodos.map(todo => (
                <TodoItem todo={todo} key={todo.id} mark={markDone} remove={deleteTodo} />
            ))}
        </ListGroup>
    );
};

const mapDispatchToProps = state => ({
    todos: state.todos.todos,
    status: state.todos.filter
});

export default connect(mapDispatchToProps, { markDone, deleteTodo })(TodoList);
