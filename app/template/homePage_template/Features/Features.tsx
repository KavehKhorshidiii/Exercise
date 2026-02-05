"use client"
import { useState } from 'react'
import dataHomes from "@/data/data.json"

export default function TheFeatures() {

  const [search , setSearch] = useState("")
  const [homes , setHomes] = useState([])
  
  const hhh = dataHomes.homes.filter((item)=> item.title.includes(search))
  console.log(hhh)

  return (
    <div className=' bg-gray-900 w-full h-96'>
      <h1 className=' text-white'>{search}</h1>
      <input onChange={(e)=> setSearch(e.target.value)} className=' text-black border-white bg-amber-100 h-10 w-60 rounded-2xl' type="search" name="" id="" />
    </div>
  )
}

