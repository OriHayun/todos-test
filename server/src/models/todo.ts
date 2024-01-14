import mongoose from "mongoose";
import { ITodo } from "../common/interfaces/ITodo";

const todoSchema = new mongoose.Schema<ITodo>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Todo: mongoose.Model<ITodo> = mongoose.model("Todo", todoSchema, "todos");

export default Todo;
