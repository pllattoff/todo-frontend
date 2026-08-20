import type {Todo} from "../../types/todo.ts";
import "./TodoCard.css"

type TodoCardProps = {
    todo: Todo;
};

export default function TodoCard(props: Readonly<TodoCardProps>) {
    return (
        <div className="todo-card">
            <h2>{props.todo.description}</h2>
            <p>Status: {props.todo.status}</p>
        </div>
    );
}