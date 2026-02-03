import data from '@/data/data.json'

type ParamsType = {
  id: string 
}

export default async function HomeDetails({ params }:{params : ParamsType}) {

  const {id} = await params

  const homeDetails = data.homes.find( home => home.id === Number(id) )


    return(
      <>
        <p> id : {homeDetails?.id}</p>
        <p> title : {homeDetails?.title}</p>
        <p> price : {homeDetails?.price}</p>
        <p> price : {homeDetails?.meterage}</p>
        <p> price : {homeDetails?.roomCount}</p>
      </>
    )
  
}