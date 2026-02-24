'use client'

import { useState } from "react"



export default function UserPage() {

    const [x , setX] = useState(true)


    return (
        <div>
           <button onClick={()=> setX(!x)} className=" border-2 p-4 rounded-2xl">change</button>
        </div>
    )

}


