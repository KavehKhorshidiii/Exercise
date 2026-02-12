'use client'

import { useSearchParams } from "next/navigation"


export default function Page() { 
  
    const searchParams = useSearchParams()

    const search = searchParams.get("ID")
    
    console.log(searchParams)
    console.log(search)
    
  return (
    <div>
      ID = {search}
    </div>
  )

}
