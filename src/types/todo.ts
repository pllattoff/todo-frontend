export type Todo = {
    id: string;
    description: string;
    status: TodoStatus;
}

export type TodoStatus = "OPEN" | "IN_PROGRESS" | "DONE";

export type CreateTodo = {
    description: string;
    status: TodoStatus;
};