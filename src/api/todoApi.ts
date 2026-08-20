import axios from "axios";
import type {CreateTodo, Todo} from "../types/todo.ts";

export function getTodos() {
    return axios.get<Todo[]>("/api/todo");
}

export function getTodoById(id: string) {
    return axios.get<Todo>(`/api/todo/${id}`);
}

export function createTodo(todo: CreateTodo) {
    return axios.post<Todo>("/api/todo", todo);
}

export function updateTodo(todo: Todo) {
    return axios.put<Todo>(`/api/todo/${todo.id}`, todo);
}

export function deleteTodo(id: string) {
    return axios.delete(`api/todo/${id}`);
}