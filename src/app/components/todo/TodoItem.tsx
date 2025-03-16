"use client";

import { Todo } from "@/types/todo.type";
import { toggleTodoCompleted } from "@/api/todo-api";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { cn } from "@/lib/utils";
import TodoDeleteButton from "./TodoDeleteButton";
interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { completed, id, text } = todo;
  return (
    <article className="flex flex-row items-center justify-between p-4 rounded-md border">
      <Link
        href={`/${id}`}
        className={cn("hover:underline", {
          "line-through": completed,
        })}
      >
        <h2>{text}</h2>
      </Link>
      <div>
        <Button
          onClick={() => toggleTodoCompleted(id, !completed)}
          variant="outline"
        >
          {completed ? "취소" : "완료"}
        </Button>
        <TodoDeleteButton id={id} />
      </div>
    </article>
  );
};

export default TodoItem;
