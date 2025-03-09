import Link from "next/link";

const DetailPage = async() => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const todo = await data.json();

  return (
    <div>
      <h1>DetailPage</h1>
      <h1>{todo.title}</h1>
      <Link href="/">HomePage</Link>
    </div>
  );
};

export default DetailPage;
