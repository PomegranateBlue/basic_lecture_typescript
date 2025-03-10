import { Todo } from "@/types/todo.type";

const SSGPage = async () => {
  const response = await fetch("http://localhost:5000/todos", {
    cache: "force-cache",
  });
  const data: Todo[] = await response.json();

  return <div>SSGPage:{JSON.stringify(data)}</div>;
};

export default SSGPage;
