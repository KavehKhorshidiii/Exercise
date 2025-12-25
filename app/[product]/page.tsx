import Link from 'next/link'
import { allProduct } from '../productData/productData'


type paramsType = {
  params: Promise<{ product:string }>
}


export default async function page({params}:paramsType) {

  const resolvedParams = await params
  console.log(resolvedParams.product)

  const productFilter = allProduct.filter((item)=>{
    return item.name === resolvedParams.product
  })
  

    return (
    <div>
      <h1>name:{productFilter[0].name}</h1>
      <p>document:{productFilter[0].dis}</p> 
      <Link href={'/'}>go home</Link>
    </div>
  )
}
