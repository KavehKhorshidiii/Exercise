'use client'
import Form from '@/app/form'
import { useEffect, useState } from 'react'


export default function Page() {

    const [dataBlogs, setBlogs] = useState()
    const [dataUsers, setUsers] = useState()

    useEffect(() => {

        fetch('http://localhost:3000/api/blogsAPI')
            .then(res => res.json())
            .then(blogs => setBlogs(blogs))

        fetch('http://localhost:3000/api/usersAPI')
            .then(res => res.json())
            .then(users => setUsers(users))

    }, [])


    const deleteHandler = (id) => {
        fetch(`http://localhost:3000/api/usersAPI/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
    }
    const editHandler = (id) => {
        fetch(`http://localhost:3000/api/usersAPI/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: "New Name (Edit)" })
        })
    }

    return (
        <div className='flex gap-3 flex-col items-center'>
            <h1>Blogs</h1>
            <div className=' border-1 p-2 rounded-2xl'>
                {
                    dataBlogs ? dataBlogs.map(item =>
                        <div className=' flex gap-10 py-5' key={item._id}>
                            <p>{item.text}</p>
                            <p>{item.Author.name}</p>
                        </div>
                    ) : null

                }
            </div>

            <h1>Users</h1>
            <div className=' border-1 p-4 rounded-2xl'>
                {
                    dataUsers ? (
                        dataUsers.map(item =>
                            <div key={item._id}>
                                <div className=' p-2 gap-3 flex flex-row'>

                                    <div className=' w-2/6'>
                                        {item.name}
                                    </div>

                                    <div className=' w-4/6 flex gap-1'>
                                        <p onClick={() => deleteHandler(item._id)} className=' border-1 rounded-xl p-1'>Delete</p>
                                        <p onClick={() => editHandler(item._id)} className=' border-1 rounded-xl p-1'>Edit</p>
                                    </div>
                                </div>
                            </div>)
                    ) : (
                        null
                    )
                }
            </div>

            <Form />

        </div>
    )

}
