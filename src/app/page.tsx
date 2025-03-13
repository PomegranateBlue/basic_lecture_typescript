import TodoList from "./components/todo/TodoList";

const HomePage = () => {
  return (
    <section>
      <div className="container p-2 mx-auto">
        <TodoList />
      </div>
    </section>
  );
};

export default HomePage;
