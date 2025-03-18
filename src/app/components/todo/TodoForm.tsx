"use client";

import { FormEvent } from "react";
import { Button } from "@/app/ui/button";
import { Input } from "@/app/ui/input";
const TodoForm = () => {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const todoText = formData.get("todo-text") as string;

    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ text: todoText }),
    });
    form.reset();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full items-center space-x-2 bg-gray-100 p-3 rounded-md"
    >
      <Input
        type="text"
        name="todo-next"
        required
        placeholder="일정을 입력하세요"
        className="bg-white"
      />
      <Button type="submit">추가하기</Button>
    </form>
  );
};

export default TodoForm;
