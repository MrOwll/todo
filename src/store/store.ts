import create from "zustand";
import produce from 'immer';
import { ITodoState } from "./types";

export const useTodoStore = create<ITodoState>((set) =>({
  todosList: [],
  addTodo: (description: string, id: string) => {
    set(
      produce((state: ITodoState) => {
        state.todosList.push({id, description, isCompleted: false});
      }
    ))
  },
  toggleTodoItemState: (id: string) => {
    set(
      produce((state: ITodoState) => {
        state.todosList = state.todosList.map((item) => {          
          return item.id === id ? { ...item, isCompleted: !item.isCompleted } : item;
        })
      })
    )
  },
  removeTodo: (id: string) => {
    set(
      produce((state: ITodoState) => {
        state.todosList = state.todosList.filter((item) => item.id !== id);
      })
    )
  },
  updateTodo: (id: string, description: string) => {
    set(
      produce((state: ITodoState) => {
        state.todosList = state.todosList.map((item) => {          
          return item.id === id ? { ...item, description } : item;
        })
      })
    )
  },
}));
