"use client";

import TodoItem from "./TodoItem";
import { useState, useEffect } from "react";
import { Todo } from "@/types/todo.type";
const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos", {
        next: {
          tags: ["todos"],
        },
      });
      const data: Todo[] = await response.json();
      setTodos(data);
    };

    fetchTodos();
  }, []);
  return (
    <ul className="splace-y-2">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
