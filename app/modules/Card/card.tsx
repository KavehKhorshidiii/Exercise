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
    <div>
      <Image alt='homeImg' width={200} height={200} src={details.img}/>
      <p>{details.title}</p>
      <p>roomCount: {details.roomCount}</p>
      <p>meterage: {details.meterage}</p>
      <p>price: {details.price}</p>
    </div>
  )
}
