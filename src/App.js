import { connect } from "react-redux";
import { NewTodo, TodoItem } from "./components";
import { todoActions } from "./stores/todo/actions";
import "./App.css";

const mapStateToProps = (state) => ({ todoItems: state.todo.items });

const mapDispatchToProps = {
  toggleTodoCompleted: todoActions.toggleTodoCompleted,
};

const App = ({ todoItems, toggleTodoCompleted }) => {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <NewTodo />
      {todoItems.map((item) => {
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
            toggleCompleted={toggleTodoCompleted}
          />
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
