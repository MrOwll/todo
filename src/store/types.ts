import { ITodoItem } from "../types/types";

export interface ITodoState {
  todosList: ITodoItem[];
  addTodo: (description: string, id: string) => void;
  removeTodo: (id: string) => void;
  toggleTodoItemState: (id: string) => void;
  updateTodo: (id: string, description: string) => void;
}
