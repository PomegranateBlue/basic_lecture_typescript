"use client";

import { createTodo } from "@/api/todo-api";
import { FormEvent } from "react";

const TodoForm = () => {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const todoText = formData.get("todo-text") as string;

    await createTodo(todoText);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="todo-next" required />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
