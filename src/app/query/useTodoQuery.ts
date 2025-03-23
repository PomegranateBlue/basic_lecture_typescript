import { getTodos, getTodoItem } from "@/api/todo-api";
import { useQuery } from "@tanstack/react-query";
import { FilterType } from "@/store/useTodoFilterStore";
import { Todo } from "@/types/todo.type";
import { createClient } from "../utils/supabase/client";

export const useTodoQuery = (filter: FilterType) => {
  const supabaseClient = createClient();
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(supabaseClient, filter),
  });
};

export const useTodoItemQuery = (id: Todo["id"]) => {
  const supabaseClient = createClient();
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoItem(supabaseClient, id),
  });
};
