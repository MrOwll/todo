import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodoStore } from "../../store/store";

export const AddTodo = () => {
  const [description, setDescription] = useState<string>('');

  const { addTodo } = useTodoStore();

  const onClick = () => {
    addTodo(description, uuidv4());
  }
  
  return (
    <div className="add-todo-container">
      <div className="add-new-todo">
        <p>Add new todo</p>
        <button className="button" onClick={onClick}>Add</button>
      </div>
      <textarea cols={30} rows={5} onChange={(e) => setDescription(e.target.value)}/>
    </div>
  );
};
