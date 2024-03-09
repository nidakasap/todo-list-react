import TodoForm from "./TodoForm";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";
import EditTodoForm from "./EditTodoForm";
const TodoWrapper = () => {
  const toogleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodoForm = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      {
        id: uuid(),
        task: todo,
        completed: false,
        isEditing: false,
      },
      ...todos,
    ]);
  };
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <TodoList
            key={index}
            task={todo}
            toogleComplete={toogleComplete}
            deleteTodo={deleteTodo}
            editTodoForm={editTodoForm}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
