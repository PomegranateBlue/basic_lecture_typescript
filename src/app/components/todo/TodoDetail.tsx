import LoadingIndicator from "../LoadingIndicator";
import TodoItem from "./TodoItem";
import { useTodoItemQuery } from "@/app/query/useTodoQuery";

interface TodoDetailProps {
  id: string;
}

const TodoDetail = ({ id }: TodoDetailProps) => {
  const { data: todo } = useTodoItemQuery(id);

  if (!todo) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <TodoItem todo={todo} />
    </div>
  );
};

export default TodoDetail;
