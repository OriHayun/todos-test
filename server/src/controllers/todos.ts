import Todo from "../models/todo";
import { ITodo } from "./../common/interfaces/ITodo";
import { NextFunction, Request, Response } from "express";

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos: ITodo[] = await Todo.find({});
    res.status(200).json(todos);
  } catch (e) {
    next(e);
  }
};

export const addNewTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const title: string = <string>req.body.title;
    const description: string = <string>req.body.description;
    const todoToAdd = new Todo({
      title: title,
      description: description,
    });
    await todoToAdd.save();
    res.status(201).json(todoToAdd);
  } catch (e) {
    next(e);
  }
};

export const editTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todoTitle: string = <string>req.params.todo_title;
    const updatedTodo: ITodo = <ITodo>req.body;
    await Todo.findOneAndUpdate(
      { title: todoTitle },
      { title: updatedTodo.title, description: updatedTodo.description }
    );

    res.status(201).json(updatedTodo);
  } catch (e) {
    next(e);
  }
};


export const deleteTodo = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const todoTitle: string = <string>req.params.todo_title;
      await Todo.findOneAndDelete({title: todoTitle});
  
      res.status(202).json();
    } catch (e) {
      next(e);
    }
  };
