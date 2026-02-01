import React from 'react'
import ProfileRealtor from './profileRealtor'
import Image from 'next/image'
import realtorProfile from "@/data/realtorData.json"
import { strict } from 'assert'

export type propType = {
  img:string
  name:string,
  details:string
}

export default function Header() {
  return (
    <div className='header flex  sticky top-0 '>

      <div className=' flex-1/3 bg-gray-900'>
        <div>
          <p>سه مالک برتر</p>
          <div>
            {realtorProfile.realtors.map( item => <ProfileRealtor realtor={item} key={item.name}></ProfileRealtor> )}
          </div>
        </div>
      </div>

      <div className=' flex-2/3 bg-gray-700'>
      <div className=' flex p-10 justify-center'>
        <Image className=' ' src='/img/logo.png' alt='logo' width={200} height={200}/>
      </div>
      <div className=' text-end p-10'>
        <p className=' text-2xl'>:خانه خودتان</p>
        <p className=' text-2xl'>با خرید خانه نهایت ازادی را احساس کنید</p>
        <button className=' bg-green-500 border-2 rounded-md'>املاک ما را مشاهده کنید</button>
      </div>
        <div className='flex justify-between p-10'>
        <Image src='/img/logo-bbc.png' alt='logo' width={100} height={100}/>
        <Image src='/img/logo-bi.png' alt='logo' width={100} height={100}/>
        <Image src='/img/logo-forbes.png' alt='logo' width={100} height={100}/>
        <Image src='/img/logo-techcrunch.png' alt='logo' width={100} height={100}/>
        </div>
      </div>

    </div>
  )
}
