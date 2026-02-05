"use client"
import { useEffect, useState } from 'react'
import dataHomes from "@/data/data.json"
import Card from '@/app/modules/Card/card'

type HomeStateType = {
    id:number;
    title:string;
    img:string;
    roomCount:number;
    meterage:number;
    price:number
}

export default function TheFeatures() {

  const [search , setSearch] = useState("")
  const [homes , setHomes] = useState<HomeStateType[]>([])
  
  const homeFilter = dataHomes.homes.filter((item)=> item.title.includes(search))


  const runSearchFunc = () => {
    setHomes([...homeFilter])
    console.log(homeFilter)

  }

  
  return (
    
    <div className=' bg-gray-900 w-full h-96'>
      
      {/* {useEffect(()=>{console.log("object")},[])} */}
      
      <div className='grid my-5 border-red-600 border-8 content-center gap-10 justify-items-center grid-cols-3 w-10/12'>
      { 
        homes.map(item => { return <Card details={item} key={item.id}/>})
      }
      </div>
      <h1 className=' text-white'>{search}</h1>
      <input onChange={(e)=> setSearch(e.target.value)} className=' text-black border-white bg-amber-100 h-10 w-60 rounded-2xl' type="search" name="" id="" />
      <button onClick={runSearchFunc}>search</button>
    </div>
  )
}

