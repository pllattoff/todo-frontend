import {useForm} from "react-hook-form";
import type {Todo} from "../types/todo.ts";
import {getTodoById, updateTodo} from "../api/todoApi.ts";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";

export default function TodoDetailPage() {
    const {id} = useParams();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isValid }
    } = useForm<Todo>({
        mode: "onChange"
    });

    useEffect(() => {
        if (!id) {
            return;
        }

        getTodoById(id)
            .then(response => {
                const todo = response.data;

                setValue("id", todo.id);
                setValue("description", todo.description);
                setValue("status", todo.status);
            });
    }, [id, setValue]);

    function onSubmit(data: Todo) {
        updateTodo(data)
            .then(() => {
                navigate("/");
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
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

            <select {...register("status")}>
                <option value="OPEN">Open</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="DONE">Done</option>
            </select>

            <button type="submit" disabled={!isValid}>
                Save
            </button>
        </form>
    );
}