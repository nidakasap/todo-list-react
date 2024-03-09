import React from "react";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";

const TodoList = ({ task, toogleComplete, deleteTodo, editTodoForm }) => {
  return (
    <div className="Todo">
      <p
        className={task.completed ? "completed" : ""}
        onClick={() => toogleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FaEdit
          className="custom-edit-icon"
          onClick={() => editTodoForm(task.id)}
        />
        <FaRegTrashAlt onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default TodoList;
