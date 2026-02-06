"use client"
import React, { ChangeEvent, useState } from 'react'
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

  const [countPost, setCountPost] = useState(6)
  const [pagination, setPagination] = useState(0)
  const [countBtnPagination, setCountBtnPagination] = useState(Math.ceil( dataHomes.homes.length / countPost ))


  const [homes, setHomes] = useState<HomeStateType[]>([...dataHomes.homes].slice(pagination , countPost))
  const [search, setSearch] = useState("")

   

  console.log("pagination:" ,  pagination)
  //console.log("pagination:" ,  pagination)



  


  const homeFilter = dataHomes.homes.filter((item) => item.title.includes(search))

  const runChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const runBtnFunc = () => {
    setHomes([...homeFilter])
  }
  const runChangeOption = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case "price": {
        const sortPrice = [...dataHomes.homes].sort((A, B) => A.price - B.price)
        setHomes([...sortPrice])
        break
      }
      case "room": {
        const sortRoom = [...dataHomes.homes].sort((A, B) => A.roomCount - B.roomCount)
        setHomes([...sortRoom])
        break
      }
      case "size": {
        const sortSize = [...dataHomes.homes].sort((A, B) => A.meterage - B.meterage)
        setHomes([...sortSize])
        break
      }
      default: {
        setHomes([...dataHomes.homes])
      }
    }
  }




  return (

    <div className='  my-5 content-center gap-10 justify-items-center grid-cols-3  w-full'>

      <div className='w-10/12 m-5 justify-between flex gap-2 '>
        <div>
          <input onChange={(e) => runChangeFunc(e)} className=' text-black border-black border-2 bg-white h-10 w-60 rounded-2xl' type="search" />
          <button onClick={runBtnFunc} className=' ml-1 text-black border-black border-2 bg-white h-10 px-4 rounded-2xl'>Search</button>
        </div>
        <div>
          <select onChange={runChangeOption} className='text-black border-black border-2 bg-white h-10 w-60 rounded-2xl' name="a" id="">
            <option>انتخواب کنید</option>
            <option value="price">بر اساس قیمت</option>
            <option value="room">بر اساس تعداد اتاق</option>
            <option value="size">بر اساس اندازه</option>
          </select>
        </div>
      </div>
      <div className=' grid my-5 content-center gap-10 justify-items-center grid-cols-3 w-10/12'>
        {
          homes.map(item => { return <Card details={item} key={item.id} /> })
        }
      </div>


      <ul className=" flex  gap-2 border-2 p-5 rounded-2xl text-black">
        {
          Array.from({length:countBtnPagination}).map((item , index) => <li key={index} className=" flex justify-center items-center border-2 rounded-full size-12 "><button onClick={()=>setPagination(index)}> {index + 1} </button></li>)
        }
        <li className=" justify-center content-center"><a href="#"> next </a></li>
      </ul>
    </div>
  )

}

