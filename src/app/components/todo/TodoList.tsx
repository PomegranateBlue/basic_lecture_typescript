"use client";

import TodoItem from "./TodoItem";
import { useTodoQuery } from "@/app/query/useTodoQuery";
import { useTodoFilterStore } from "@/store/useTodoFilterStore";
const TodoList = () => {
  const { filter } = useTodoFilterStore();
  const { data: todos } = useTodoQuery(filter);

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
