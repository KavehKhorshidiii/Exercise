import mongoose from "mongoose"
import {users} from "../models/usersModel" // Import users schema


export const blogsSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        },

        Author: users.schema // This means that all users are stored inside the blog.  

    },
    {
        collection: "blogs",
    }
)

export default mongoose.model("blogs", blogsSchema)