import { FC, useState } from "react";
import { useTodoStore } from "../../../store/store";
import { ITodoItem } from "../../../types/types";

export const TodoItem: FC<ITodoItem> = ({id, description, isCompleted}) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [newDescription, setNewDescription] = useState<string>('');

  const { toggleTodoItemState, removeTodo, updateTodo } = useTodoStore();

  const onChange = () => {
    toggleTodoItemState(id);
  };

  const removeItem = () => {
    removeTodo(id);
  };

  const onUpdate = () => {
    updateTodo(id, newDescription);
    setIsUpdate(false);
  };
  
  return (
    <div className="todo-item-container">
      {isUpdate ? (
        <div className="update-todo-container">
          <textarea defaultValue={description} cols={30} rows={5} onChange={(e) => setNewDescription(e.target.value)}/>
          <button className="button" onClick={onUpdate}>Save</button>
        </div>
      ) : (
        <>
          <div>
            <input className="todo-checkbox" type={'checkbox'} onChange={onChange} checked={isCompleted} />
            {description}
          </div>
          <div>
            <button className="button" onClick={() => setIsUpdate(true)}>Edit</button>
            <button className="button" onClick={removeItem}>Remove</button>
          </div>
        </>
      )}
    </div>
  );
};
