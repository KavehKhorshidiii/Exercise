'use client'

import { useState } from "react"


export default function UserPage() {

    const [x , setX] = useState(true)

    return (
        <div>
           <h1>Show = {x ? '❌' : '✅'}</h1>
           <button onClick={()=> setX(!x)} className=" border-2 p-4 rounded-2xl">change</button>
        </div>
    )

}


