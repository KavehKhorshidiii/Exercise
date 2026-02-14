async function GetData({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    return slug;
}



// app/posts/[slug]/page.tsx
export default async function PostPage() {
  const data = await GetData();
  return <div>Slug: {data}</div>;
}