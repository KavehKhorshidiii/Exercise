"use client"
import { ChangeEvent, useEffect, useState } from 'react'
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

  const [search, setSearch] = useState("")
  const [homes, setHomes] = useState<HomeStateType[]>([...dataHomes.homes])

  const homeFilter = dataHomes.homes.filter((item) => item.title.includes(search))

  const runChangeFunc = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setHomes([...homeFilter])
  }

  return (

    <div className='  my-5 content-center gap-10 justify-items-center grid-cols-3  w-full'>
      <div className=' grid my-5 content-center gap-10 justify-items-center grid-cols-3 w-10/12'>
        {
          homes.map(item => { return <Card details={item} key={item.id} /> })
        }
      </div>
      <h1 className=' text-white'>{search}</h1>
      <input onChange={(e) => runChangeFunc(e)} className=' text-black border-black border-4 bg-amber-100 h-10 w-60 rounded-2xl' type="search" name="" id="" />
    </div>
  )

}

