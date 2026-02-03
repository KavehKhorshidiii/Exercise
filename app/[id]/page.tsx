import data from '@/data/data.json'

type ParamsType = {
  id: number 
}

export default async function HomeDetails({ params }:{params : ParamsType}) {

  const {id} = await params

  const homeDetails = data.homes.find( home => home.id === id )

  if(homeDetails){
    console.log(homeDetails.id)
  }

    return(
      <>
        <h1> id : {homeDetails?.id}</h1>
      </>
    )
  
}