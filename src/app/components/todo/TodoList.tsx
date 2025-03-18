"use client";

import TodoItem from "./TodoItem";
import { useTodoQuery } from "@/app/query/useTodoQuery";
const TodoList = () => {
  const { data: todos } = useTodoQuery();

  return (
    <ul className="splace-y-2">
      {todos?.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
