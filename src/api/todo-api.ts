import { Todo } from "@/types/todo.type";

export const getTodos = async () => {
  const response = await fetch("https://localhost:5000/todos");
  const data: Todo[] = await response.json();

  return data;
};
