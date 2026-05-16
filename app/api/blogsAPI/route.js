import dbConnect from "../../../lib/db/dbConnect";
import blogsModel from "../../../models/blogsModel";
import {users} from "../../../models/usersModel"
import { NextResponse } from "next/server";



export async function GET() {

    try {

        await dbConnect()
        const blogData = await blogsModel.find({}, "-__v")
        return NextResponse.json(blogData)

    } catch (error) {

        return NextResponse.json({ message: error.message }, { status: 500 });

    }

}

export async function POST(req) {

    try {

        await dbConnect()

        const { blog, authorID } = await req.json() // { blog: 'test', authorID: '6a07060d3ad7573838e923f4' }
        const foundUser = await users.findById(authorID);
        await blogsModel.create({ text: blog, Author: foundUser })
        return NextResponse.json("Add new blog")

    } catch (error) {

        return NextResponse.json(error.message)

    }

}