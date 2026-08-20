import {useForm} from "react-hook-form";
import type {CreateTodo, Todo} from "../../types/todo.ts";
import {createTodo} from "../../api/todoApi.ts";
import "./TodoForm.css";

type TodoFormProps = {
    onTodoCreated: (todo: Todo) => void;
}

export default function TodoForm(props: Readonly<TodoFormProps>) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm<CreateTodo>({
        mode: "onChange"
    });

    function onSubmit(data: CreateTodo) {
        createTodo(data)
            .then(response => {
                props.onTodoCreated(response.data);
                reset();
            });
    }

    return (
        <form
            className="todo-form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                type="text"
                placeholder="Description"
                {...register("description", {
                    required: "Description is required",
                    minLength: {
                        value: 2,
                        message: "Description must contain at least 2 characters"
                    },
                    maxLength: {
                        value: 100,
                        message: "Description must not exceed 100 characters"
                    }
                })}
            />

            {errors.description && (
                <span>{errors.description.message}</span>
            )}

            <select
                {...register("status", {
                    required: true
                })}
            >
                <option value="OPEN">Open</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="DONE">Done</option>
            </select>

            <button type="submit" disabled={!isValid}>
                Add Todo
            </button>
        </form>
    );
}