import { getTodos, getTodoItem } from "@/api/todo-api";
import { useQuery } from "@tanstack/react-query";
import { FilterType } from "@/store/useTodoFilterStore";
export const useTodoQuery = (filter: FilterType) => {
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

export const useTodoItemQuery = (id: string) => {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoItem(id),
  });
};
