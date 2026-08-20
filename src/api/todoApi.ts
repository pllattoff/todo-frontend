import axios from "axios";
import type {Todo} from "../types/todo.ts";

export function getTodos() {
    return axios.get<Todo[]>("/api/todo");
}