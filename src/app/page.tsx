import TodoList from "./components/todo/TodoList";
import TodoForm from "./components/todo/TodoForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TodoFilterSwitch from "./components/todo/TodoFilterSwitch";
import { getTodos } from "@/api/todo-api";
import { createClient } from "./utils/supabase/client";
const HomePage = async () => {
  const queryClient = new QueryClient();
  const supabaseClient = await createClient();
  
  await queryClient.prefetchQuery({
    queryKey: ["todos", "all"],
    queryFn: () => getTodos(supabaseClient),
  });

  await queryClient.prefetchQuery({
    queryKey: ["todos", "completed"],
    queryFn: () => getTodos(supabaseClient, "completed"),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section>
        <div className="container p-2 mx-auto space-y-4">
          <TodoForm />
          <div className="flex flex-row justify-end hover:cursor-pointer ">
            <TodoFilterSwitch />
          </div>
          <TodoList />
        </div>
      </section>
    </HydrationBoundary>
  );
};

export default HomePage;
