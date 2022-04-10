import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodoStore } from "../../store/store";

export const AddTodo = () => {
  const [description, setDescription] = useState<string>('');

  const { todosList, addTodo } = useTodoStore();

  const onClick = () => {
    addTodo(description, uuidv4());
  }

  console.log(todosList);
  
  return (
    <div className="add-todo-container">
      <div className="add-new-todo">
        <p>Add new todo</p>
        <button className="add-todo-button" onClick={onClick}>Add</button>
      </div>
      <textarea name="" id="" cols={30} rows={5} onChange={(e) => setDescription(e.target.value)}/>
    </div>
  )
}
