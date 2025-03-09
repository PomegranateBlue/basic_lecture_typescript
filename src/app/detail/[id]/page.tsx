interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const DetailIdPage = async ({ params }: DetailPageProps) => {
  const { id } = await params;
  console.log("DetailPage id", id);

  return <div>DetailIdPage</div>;
};
export default DetailIdPage;
