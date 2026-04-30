// app/api/route.js

import { writeFile } from "fs/promises";
import fs, { writeFileSync } from "fs";
import path from "path";


// GET

export function GET() {

    const filePath = path.join(process.cwd(), "database", "DB.json");
    // console.log(filePath)
    // /Users/macbookair/Documents/NextJs/exercise/database/DB.json


    const fileData = fs.readFileSync(filePath);
    // console.log(fileData)
    // <Buffer 7b 0a 20 20 20 20 22 75 73 65 72 73 22 7d 0a ... 7 more bytes>


    const users = JSON.parse(fileData);
    //console.log(users)
    // { users: [ { id: 1, name: 'kaveh' } ] }

    return Response.json(users);

}


// POST

export async function POST(req) {

    const filePath = path.join(process.cwd(), "database", "DB.json");
    // console.log(filePath)
    // /Users/macbookair/Documents/NextJs/exercise/database/DB.json


    const fileData = fs.readFileSync(filePath);
    // console.log(fileData)
    // <Buffer 7b 0a 20 20 20 20 22 75 73 65 72 73 22 7d 0a ... 7 more bytes>


    const users = JSON.parse(fileData);
    console.log(users)
    // { users: [ { id: 1, name: 'kaveh' } ] }



    const name = await req.json()
    console.log(name)
    // Korosh
    const newUser = { id: users.users.length + 1, name: name }
    // {users: [{ id: 1, name: 'kaveh' },{ id: 2, name: 'Korosh' }]}

    console.log(newUser)
    // Add New Yser
    users.users.push(newUser)
    // Save New Array
    await writeFile(filePath, JSON.stringify(users, null, 2));


    return Response.json({
        message: "POST",
        data: { name },
    })
}


// DELETE

export function DELETE(req) {

    const searchParams = req.nextUrl.searchParams
    const ID = searchParams.get('id')
    console.log(ID) // -> 1



    const filePath = path.join(process.cwd(), "database", "DB.json");
    // console.log(filePath)
    // /Users/macbookair/Documents/NextJs/exercise/database/DB.json

    const fileData = fs.readFileSync(filePath);
    // console.log(fileData)
    // <Buffer 7b 0a 20 20 20 20 22 75 73 65 72 73 22 7d 0a ... 7 more bytes>

    const users = JSON.parse(fileData);
    // console.log(users)
    // { users: [ { id: 1, name: 'kaveh' } ] }


    const filteredUsers = users.users.filter(user => user.id !== +ID)
    console.log(filteredUsers)
    // [ { id: 1, name: 'kaveh' } ]

    const newUsers = { "users": filteredUsers }
    console.log(newUsers)
    // {users: [{ id: 1, name: 'kaveh' },{ id: 2, name: 'john' }]}

    writeFileSync(filePath, JSON.stringify(newUsers, null, 2))


    return Response.json('DELETE')
}


// PUT/PATCH

export async function PUT(req) {

    const reqBody = await req.json()
    //console.log(reqBody)



    const filePath = path.join(process.cwd(), "database", "DB.json");
    // console.log(filePath)
    // /Users/macbookair/Documents/NextJs/exercise/database/DB.json

    const fileData = fs.readFileSync(filePath);
    // console.log(fileData)
    // <Buffer 7b 0a 20 20 20 20 22 75 73 65 72 73 22 7d 0a ... 7 more bytes>

    const users = JSON.parse(fileData);
    // console.log(users)
    // { users: [ { id: 1, name: 'kaveh' } ] }



    const index = users.users.findIndex(user => user.id == reqBody.id)
    //console.log(index)
    //console.log(ID)
    //console.log(user)

    users.users[index] = reqBody 
    users[index] = {
        ...users.users[index],
        ...reqBody 
    }
    
    //console.log({...users.users[index]})
    //console.log({...reqBody})
    

    writeFileSync(filePath, JSON.stringify(users, null, 2))


    return Response.json("PUT")
}