"use client";

import { Todo } from "@/types/todo.type";
import { deleteTodo, toggleTodoCompleted } from "@/api/todo-api";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { completed, id, text } = todo;
  return (
    <div>
      <h2>{text}</h2>
      <p>{completed ? "완료" : "미완료"}</p>

      <div>
        <button onClick={() => toggleTodoCompleted(id, !completed)}>
          완료
        </button>
        <button onClick={() => deleteTodo(id)}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
