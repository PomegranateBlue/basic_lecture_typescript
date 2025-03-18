"use client";

import { Todo } from "@/types/todo.type";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { cn } from "@/lib/utils";
import TodoDeleteButton from "./TodoDeleteButton";
import { useToggleTodoMutation } from "@/app/query/useTodoMutation";
interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { completed, id, text } = todo;
  const { mutate: toggleTodoMutate } = useToggleTodoMutation();

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
          onClick={() => toggleTodoMutate({ id, completed: !completed })}
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
