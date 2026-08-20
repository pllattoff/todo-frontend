import type {Todo} from "../../types/todo.ts";
import "./TodoCard.css"
import {Link} from "react-router-dom";

type TodoCardProps = {
    todo: Todo;
    onDelete: (id: string) => void;
};

export default function TodoCard(props: Readonly<TodoCardProps>) {
    return (
        <div className="todo-card">
            <h2>{props.todo.description}</h2>
            <p>Status: {props.todo.status}</p>

            <div className="todo-card-actions">
                <Link to={`/todos/${props.todo.id}`}>
                    Edit
                </Link>

                <button onClick={() => props.onDelete(props.todo.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}