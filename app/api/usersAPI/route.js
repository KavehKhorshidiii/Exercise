import dbConnect from "../../../lib/db/dbConnect";
import { users } from "../../../models/usersModel"
import { NextResponse } from "next/server";

import { ValidationUsers } from "../../../validators/usersValidation";


export async function GET() {

    try {

        await dbConnect()
        const usersData = await users.find()
        return NextResponse.json(usersData)

    } catch (error) {

        return NextResponse.json({ message: error.message }, { status: 500 });

    }
}


export async function POST(req) {

    try {
        const body = await req.json()


        const [Validation] = ValidationUsers(body)



        if (Validation !== true) {
            return NextResponse.json([
                { status: 400 },
                { message: Validation.message }
            ]);
        }

        await dbConnect()
        const user = await users.create({ name: body.name })
        return NextResponse.json(user, { status: 201 });

    } catch (error) {

        return NextResponse.json([
            { message: error.message },
            { status: 500 }
        ])
    }


}
