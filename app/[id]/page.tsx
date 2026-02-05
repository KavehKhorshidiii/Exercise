import data from '@/data/data.json'

type ParamsType = {
  id: string 
}

export default async function HomeDetails({ params }:{params : ParamsType}) {

  const {id} = await params

  const homeDetails = data.homes.find( home => home.id === Number(id) )

    return(
      <div className=' bg-gray-500'>
        <p className='text-4xl'> title: {homeDetails?.title}</p>
        <p className='text-4xl'> price: {homeDetails?.price}</p>
        <p className='text-4xl'> meterage: {homeDetails?.meterage}</p>
        <p className='text-4xl'> roomCount: {homeDetails?.roomCount}</p>
      </div>
    )
  
}