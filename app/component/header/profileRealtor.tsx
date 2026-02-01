import React from 'react'
import Image from 'next/image'

type propType ={
    realtor:{
        img:string
        name:string,
        details:string
    }
}

export default function profileRealtor({realtor}:propType) {
  return (
    <div className='flex gap-3 justify-center'>
        <div className='flex justify-center text-end flex-col'>
            <div>
                {realtor.name}
            </div>
            <div>
                {realtor.details}
            </div>
        </div>
        <div>
            {<Image className='rounded-full' alt='img-realtor' src={realtor.img} width={100} height={100}/>}
        </div>
    </div>
  )
}
