import { createTodo, getTodos } from "@/api/todo-api";
import { revalidatePath } from "next/cache";

export const GET = async () => {
  const todos = await getTodos();
  return Response.json(todos);
};

export const POST = async (request: Request) => {
  const { title } = await request.json();

  await createTodo(title);

  revalidatePath("/");
  return Response.json({ revalidated: true, now: Date.now() });
};
