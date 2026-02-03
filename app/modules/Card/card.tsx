import React from 'react'
import Image from 'next/image'

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

        <div className='Image h-2/3 bg-white '></div>

        <div className=' flex h-1/3 flex-col justify-around'>
          <div>
            <p>{details.title}</p>
            <p>roomCount: {details.roomCount}</p>
            <p>meterage: {details.meterage}</p>
            <p>price: {details.price}</p>
          </div>
          <div>
            <button className=' border-2 bg-amber-600 w-full '>مشاهده ملک</button>
          </div>
        </div>

      </div>

  )
}
