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


  //تعداد پست های که باید نمایش بده
  const [countPost, setCountPost] = useState(3)
  // صفحه ای که روی اون هستیم
  const [pagination, setPagination] = useState(1)
  // تعداد دکمه های
  const countBtnPagination = Math.ceil(dataHomes.homes.length / countPost)

  const endLength = pagination * countPost
  const startLength = endLength - countPost

  const [search, setSearch] = useState("")
  

  const [homeFilter , setHomeFilter] = useState( [...dataHomes.homes].filter((item)=> item.title.includes(search)))
  

  // نشان دهنده پست ها
  const homes = homeFilter.slice(startLength, endLength)





  const runChangeOption = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case "price": {
        //homeFilter.sort((A, B) => A.price - B.price) 
        console.log(e.target.value)
        break
      }
      case "room": {
        //return [...homeFilter].sort((A, B) => A.roomCount - B.roomCount)
        console.log(e.target.value)
        break
      }
      case "size": {
        //return [...homeFilter].sort((A, B) => A.meterage - B.meterage)
        console.log(e.target.value)
        break
      }
      
    }
  }




  const fun = (num: number) => {
    setPagination(num + 1)
  }


  return (

    <div className='  my-5 content-center gap-10 justify-items-center grid-cols-3  w-full'>

      <div className='w-10/12 m-5 justify-between flex gap-2 '>
        <div>
          <input onChange={(e) => setSearch(e.target.value)} className=' text-black border-black border-2 bg-white h-10 w-60 rounded-2xl' type="search" />
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
          Array.from({ length: countBtnPagination }).map((item, index) =>
            <li onClick={() => fun(index)} key={index} className=" flex justify-center items-center border-2 rounded-full size-12 "> {index + 1} </li>
          )
        }
        <li className=" justify-center content-center"><a href="#"> next </a></li>
      </ul>

    </div>
  )

}

