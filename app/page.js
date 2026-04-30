// app/page.js
'use client'

import Form from './form'
import { useState, useEffect } from 'react';
//import { writeFile } from "fs/promises";
//import fs from 'fs';
//import path from "path";



export default function Home() {

    const [data, setData] = useState([]);
    const [close, setClose] = useState('hidden');
    const [theUser, setUser] = useState('');
    const [newName, setNewName] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/api')
            .then((res) => res.json())
            .then((D) => setData(D))
    }, []);

    const deleteHandler = async (id) => {

        await fetch(`http://localhost:3000/api?id=${id}`, {
            method: "DELETE",
        })

    }

    const PutHandler = async (user) => {

        if (close == 'hidden') { setClose('block') } else { setClose('hidden') }
        setUser(user)

    }

    const editFunc = async () => {
        await fetch(`http://localhost:3000/api`, {
            method: "PUT",
            body: JSON.stringify({id:theUser.id ,name:newName})
        })
        setClose('hidden')
    }



    return (
        <div className=' flex flex-col gap-3'>
            {data.users ? data.users.map(user =>
                <div key={user.id}>
                    {user.id} - {user.name}
                    <button className=' bg-red-500 border-2 p-1 rounded-2xl' onClick={() => deleteHandler(user.id)}>Del</button>
                    <button className=' bg-amber-500 border-2 p-1 rounded-2xl' onClick={() => PutHandler(user)}>Put / Patch</button>
                </div>
            ) : <p>Loading...</p>}
            <Form></Form>
            <div className={` ${close} h-full w-full  flex-col items-center justify-center bg-black absolute p-3 border-2 border-amber-500`}>
                <div className=' flex justify-center'>
                    <input onChange={(e)=>setNewName(e.target.value)} className='border-2 p-2 border-amber-500 rounded-2xl' type="text" />
                    <button onClick={editFunc} className='border-2 p-2 border-amber-500 rounded-2xl'>Edit</button>
                    <button onClick={() => close == 'hidden' ? setClose('block') : setClose('hidden')} className='  border-2 p-2 border-amber-500 rounded-2xl'>Close</button>
                </div>
            </div>
        </div>
    );
}