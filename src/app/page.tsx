import { getTodos } from "@/api/todo-api";
import TodoList from "./components/todo/TodoList";
import TodoForm from "./components/todo/TodoForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
const HomePage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section>
        <div className="container p-2 mx-auto space-y-4">
          <TodoForm />
          <TodoList />
        </div>
      </section>
    </HydrationBoundary>
  );
};

export default HomePage;
