// app/api/route.js


import { writeFile } from "fs/promises";
import fs from "fs";
import path from "path";




export async function POST(req) {

    const {username , password} = await req.json() //{ username: 'kaveh', password: '2003' }

    const filePath = path.join(process.cwd(), "database", "DB.json"); //Path
    const fileData = fs.readFileSync(filePath); //Buffer
    const user = JSON.parse(fileData); // { users: [ { id: 1, name: 'kaveh' } ] }
    
    user.user.push({username , password})
    await writeFile(filePath, JSON.stringify(user, null, 2));

    return Response.json("POST")

}