import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        collection: 'users'
    }
)

export const users = mongoose.model("users", UsersSchema) 