import { useTodoStore } from "../../store/store";
import { TodoItem } from "./todo-item/todo-item"

export const TodoList = () => {
    const { todosList } = useTodoStore();

    return (
        <div>
            <h3>TODO list</h3>
            {todosList.map((item) => <TodoItem key={item.id} id={item.id} description={item.description} isCompleted={item.isCompleted} />)}
        </div>
    )
}