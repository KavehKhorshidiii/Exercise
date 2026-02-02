import ProfileRealtor from './profileRealtor'
import Image from 'next/image'
import realtorProfile from "@/data/realtorData.json"

export default function Header() {
  return (
    <div className='header flex '>


      <div className=' flex-1/3 flex flex-col justify-center bg-gray-900'>
        <div className=' p-20'>
          <p className='text-center text-3xl text-yellow-600'>سه مالک برتر</p>
          <div className=' flex flex-col gap-4'>
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
        <button className=' bg-yellow-600 min-h-10 px-4 rounded-md'>املاک ما را مشاهده کنید</button>
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
