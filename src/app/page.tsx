import Link from "next/link";
import { getTodos } from "@/api/todo-api";

const HomePage = async () => {
  const todos = await getTodos();
  return (
    <div>
      <h1>HomePage</h1>
      <Link href="/detail">Detail Page</Link>
      <ul>
        {todos.map(({ id, text, completed }) => (
          <li key={id}>
            {text} {completed ? "(Completed)" : "(Pending)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
