import {useEffect, useState} from "react";
import type {Todo} from "../types/todo.ts";
import {getTodos} from "../api/todoApi.ts";

export default function TodoListPage() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getTodos()
            .then(response => {
                setTodos(response.data);
            });
    }, []);

    return (
        <div>
            <h1>Todos</h1>

            {todos.map(todo => (
                <div key={todo.id}>
                    <p>{todo.description}</p>
                    <p>{todo.status}</p>
                </div>
            ))}
        </div>
    );
}