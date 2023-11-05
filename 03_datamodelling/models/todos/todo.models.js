import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({},{timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema) //* Todo is stored in the database as "todos"