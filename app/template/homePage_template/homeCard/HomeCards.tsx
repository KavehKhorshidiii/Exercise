'use client'

import HomeData from '@/data/data.json'
import Card from '@/app/modules/Card/card'
import { Feature } from 'next/dist/build/webpack/plugins/telemetry-plugin/telemetry-plugin'



export default function TheHomeCards() {

  return(

    <div className='grid my-5 content-center gap-10 justify-items-center grid-cols-3 w-10/12'>

      {/* {HomeData.homes.map(item => { return <Card details={item} key={item.id}/>})} */}

    </div>

  )

}
