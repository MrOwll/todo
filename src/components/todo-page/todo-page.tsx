
import { AddTodo } from '../add-todo/add-todo';
import { TodoList } from '../todo-list/todo-list';

export const TodoPage = () => (
  <div className='container'>
    <div className='page-content'>
      <h1>TODO</h1>
      <div>
        <AddTodo /> 
        <TodoList />
      </div>
    </div>
  </div>
);
