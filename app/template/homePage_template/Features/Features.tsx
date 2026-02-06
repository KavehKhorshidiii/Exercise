"use client"
import React, { ButtonHTMLAttributes, ChangeEvent, InputEvent, ReactElement, useEffect, useState } from 'react'
import dataHomes from "@/data/data.json"
import Card from '@/app/modules/Card/card'

type HomeStateType = {
  id: number;
  title: string;
  img: string;
  roomCount: number;
  meterage: number;
  price: number
}

export default function TheFeatures() {

  const [homes, setHomes] = useState<HomeStateType[]>([...dataHomes.homes])
  const [search, setSearch] = useState("")
  
  const homeFilter = dataHomes.homes.filter((item) => item.title.includes(search))
  
  
  const runChangeFunc = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  
  const runBtnFunc = () => {
    setHomes([...homeFilter])
  }





  return (

    <div className='  my-5 content-center gap-10 justify-items-center grid-cols-3  w-full'>
      <div className='w-10/12 m-5 flex gap-2 '>
        <input onChange={(e)=>runChangeFunc(e)} className=' text-black border-black border-2 bg-white h-10 w-60 rounded-2xl' type="search"/>
        <button onClick={runBtnFunc} className=' text-black border-black border-2 bg-white h-10 px-4 rounded-2xl'>Search</button>
      </div>
      <div className=' grid my-5 content-center gap-10 justify-items-center grid-cols-3 w-10/12'>
        {
          homes.map(item => { return <Card details={item} key={item.id} /> })
        }
      </div>
    </div>
  )

}

