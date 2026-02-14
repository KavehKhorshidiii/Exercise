// فرض کنیم API داریم که slug برمی‌گردونه


export default async function Page({ params }: { params: { slug: string } }) {

  const data = await params
  console.log(data)

  return (
      <p>{data.slug}</p>
  );
}
