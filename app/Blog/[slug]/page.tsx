export default function page({params} : {params:{slug: string}}) {  
    
  return (
    <div>
      Show me the ID: {params.slug}
    </div>
  )

}
