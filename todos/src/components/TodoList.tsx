import React from "react";
import styled from "@emotion/styled";
import { ITodo } from "../common/interfaces/todo";

interface props {
  todos: ITodo[];
  removeTodo: (title: string) => void;
}

const TodoList: React.FC<props> = ({ todos, removeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo: ITodo, index: number) => (
        <div key={index}>
          <span>{todo.title}</span>
          <span>- {todo.description}</span>
          <button onClick={() => removeTodo(todo.title)}>Remove</button>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
