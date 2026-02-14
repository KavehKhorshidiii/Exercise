// app/posts/[slug]/page.tsx
export default function PostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  return <div>Slug: {slug}</div>;
  
}