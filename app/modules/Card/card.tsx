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
      <div className=' w-96 h-[400px] bg-gray-400 overflow-hidden rounded-4xl border-4'>
        <div className=' h-40 bg-white '></div>
        <p>{details.title}</p>
        <p>roomCount: {details.roomCount}</p>
        <p>meterage: {details.meterage}</p>
        <p>price: {details.price}</p>
      </div>
  )
}
