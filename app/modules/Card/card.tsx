import Link from "next/link"

type homeDetailsType = {
  details:{
    id:number;
    title:string;
    img:string;
    roomCount:number;
    meterage:number;
    price:number
  }
}

export default function card({details}:homeDetailsType) {
  return (

      <div className=' w-96 h-96 bg-gray-400 overflow-hidden rounded-4xl border-4'>

        <div className='Image h-1/2 bg-gray-600 '></div>

        <div className=' flex h-1/2 flex-col justify-between'>
          <div>
            <p>{details.title}</p>
            <p>roomCount: {details.roomCount}</p>
            <p>meterage: {details.meterage}</p>
            <p>price: {details.price}</p>
          </div>
         
            <Link href={`/${details.id}`} className='py-5 text-center bg-yellow-600 w-full '>مشاهده ملک</Link>
         
        </div>

      </div>

  )
}
