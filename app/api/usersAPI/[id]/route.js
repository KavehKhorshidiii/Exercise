import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db/dbConnect";
import { users } from "../../../../models/usersModel";

export async function DELETE(req, { params }) {

    try {

        await connectDB();
        const { id } = await params
        const deletedUser = await users.findByIdAndDelete(id);

        if (!deletedUser) {
            return Response.json({ message: "User not found" }, { status: 404 })
        };

        return NextResponse.json({ message: "User deleted successfully", deletedUser }, { status: 200 });

    } catch (error) {

        return NextResponse.json({ message: error.message }, { status: 500 })
    }

}


export async function PUT(req, { params }) {
    try {

        await connectDB()

        const { id } = await params
        const { name } = await req.json()

        const updatedUser = await users.findByIdAndUpdate(
            id,
            { name },
            { returnDocument: "after" }
        );

        if (!updatedUser) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: "updated successfully", updatedUser }, { status: 200 });

    } catch (error) {

        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );

    }
}