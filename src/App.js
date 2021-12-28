import "./App.css";
import AddTodo from "./components/todo/AddTodo";
import TopNav from "./components/nav/TopNav";
import TodoList from "./components/todo/TodoList";

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 m-auto pt-3">
                    <TopNav />
                    <AddTodo />
                    <TodoList />
                </div>
            </div>
        </div>
    );
}

export default App;
