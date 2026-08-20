import {useEffect, useState} from "react";
import type {Todo} from "../../types/todo.ts";
import {deleteTodo, getTodos} from "../../api/todoApi.ts";
import TodoCard from "../../components/TodoCard/TodoCard.tsx";
import TodoForm from "../../components/TodoForm/TodoForm.tsx";
import "./TodoListPage.css";

export default function TodoListPage() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getTodos()
            .then(response => {
                setTodos(response.data);
            });
    }, []);

    function handleTodoCreated(todo: Todo) {
        setTodos(prevTodos => [...prevTodos, todo]);
    }

    function handleTodoDeleted(id: string) {
        deleteTodo(id)
            .then(() => {
                setTodos(prevTodos =>
                    prevTodos.filter(todo => todo.id !== id)
                );
            });
    }

    return (
        <main className="todo-list-page">
            <h1>Todos</h1>

            <TodoForm onTodoCreated={handleTodoCreated} />

            {todos.map(todo => (
                <TodoCard
                    key={todo.id}
                    todo={todo}
                    onDelete={handleTodoDeleted}
                />
            ))}
        </main>
    );
}