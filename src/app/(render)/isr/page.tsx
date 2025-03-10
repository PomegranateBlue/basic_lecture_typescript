import { Todo } from "@/types/todo.type";

const TEN_SECONDES = 10;

const ISRPage = async () => {
  const response = await fetch("http://localhost:5000/todos", {
    next: {
      revalidate: TEN_SECONDES,
    },
  });
  const data: Todo[] = await response.json();

  return <div>ISRPage:{JSON.stringify(data)}</div>;
};

export default ISRPage;
