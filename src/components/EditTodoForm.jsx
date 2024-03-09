import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [inputValue, setInputValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(inputValue, task.id);
    setInputValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        className="todo-input"
        placeholder="Update Task"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Save
      </button>
    </form>
  );
};

export default EditTodoForm;
