type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function TestID({ params }: PageProps) {

  const resolvedParams = await params;

  return <div>{resolvedParams.id}</div>;
}