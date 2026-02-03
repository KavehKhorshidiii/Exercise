import data from '@/data/data.json'

type ParamsType = {
  id: string 
}

export default async function HomeDetails({ params }:{params : ParamsType}) {

  const {id} = await params

  const homeDetails = data.homes.find( home => home.id === Number(id) )


    return(
      <>
        <p> title: {homeDetails?.title}</p>
        
        <p> price: {homeDetails?.price}</p>
        <p> meterage: {homeDetails?.meterage}</p>
        <p> roomCount: {homeDetails?.roomCount}</p>
      </>
    )
  
}