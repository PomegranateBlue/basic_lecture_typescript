import { getTodos, getTodoItem } from "@/api/todo-api";
import { useQuery } from "@tanstack/react-query";

export const useTodoQuery = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};

export const useTodoItemQuery = (id: string) => {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoItem(id),
  });
};
