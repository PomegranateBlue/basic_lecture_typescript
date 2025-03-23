"use client";

import { Todo } from "@/types/todo.type";
import Link from "next/link";
import { cn } from "@/lib/utils";
import TodoDeleteButton from "./TodoDeleteButton";
import { useToggleTodoMutation } from "@/app/query/useTodoMutation";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "@radix-ui/react-checkbox";
import { useId } from "react";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { completed, id, title } = todo;
  const checkBoxId = useId();
  const { mutate: toggleTodoCompleted } = useToggleTodoMutation();

  const onCheckedChange = (checked: CheckedState) => {
    if (checked === "indeterminate") return;

    toggleTodoCompleted({ id, completed: checked });
  };

  return (
    <article className="flex flex-row items-center justify-between p-4 rounded-md border">
      <div className="flex flex-row gap-4 items-center">
        <Checkbox
          id={checkBoxId}
          checked={completed}
          onCheckedChange={onCheckedChange}
        />
        <Link
          href={`/${id}`}
          className={cn("hover:underline", {
            "line-through": completed,
          })}
        >
          <h2>{title}</h2>
        </Link>
      </div>
      <div className="space-x-2">
        <TodoDeleteButton id={id} />
      </div>
    </article>
  );
};

export default TodoItem;
