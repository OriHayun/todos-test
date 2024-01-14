import express from "express";
import {
  getTodos,
  addNewTodo,
  editTodo,
  deleteTodo,
} from "../controllers/todos";
const todosRouter: express.Router = express.Router();

todosRouter.get("/", getTodos);
todosRouter.post("/add", addNewTodo);
todosRouter.put("/edit/:todo_title", editTodo);
todosRouter.delete("/delete/:todo_title", deleteTodo);

export default todosRouter;
