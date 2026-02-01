import React from 'react'
import { propType } from './page'


export default function profileRealtor(realtor:propType) {
  return (
    <div>
        img: {realtor.img}
      name:{realtor.name}
      {realtor.details}
    </div>
  )
}
