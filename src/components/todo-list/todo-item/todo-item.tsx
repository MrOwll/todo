import { FC, useState } from "react";
import { useTodoStore } from "../../../store/store";
import { ITodoItem } from "../../../types/types";

export const TodoItem: FC<ITodoItem> = ({id, description, isCompleted}) => {

  const { toggleTodoItemState, removeTodo } = useTodoStore();

  const onChange = () => {
    toggleTodoItemState(id);
  }

  const removeItem = () => {
    removeTodo(id);
  }
  
  return (
    <div className="todo-item-container">
      <div>
        <input className="todo-checkbox" type={'checkbox'} onChange={onChange} checked={isCompleted} />
        {description}
      </div>
      <button className="remove-todo-button" onClick={removeItem}>Remove</button>
    </div>
  );
}
