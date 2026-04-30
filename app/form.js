'use client'
import { useState } from 'react'

export default function Form() {

  const [name, setName] = useState('')

  const postFunc = async () => {

    await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify( name ),
    })

    setName('')
  }


  return (
    <div className=' flex gap-4 flex-col border-2 p-5 rounded-2xl'>
      <input value={name} onChange={(e) => setName(e.target.value)} className='border-2 p-2 rounded-2xl' type="text" />
      <button onClick={postFunc} className='border-2 p-5 rounded-2xl'>ADD</button>
    </div>
  )
}
