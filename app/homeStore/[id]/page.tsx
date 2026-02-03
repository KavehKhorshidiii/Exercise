"use client"

type paramsType = {
  params: Promise<{id:string}>
}

export default function homeDetails({params}:paramsType) {
  console.log(params)

  const theParams = params

  return (
    <div onClick={()=>console.log(theParams)}>
      Home Details
    </div>
  )
}
