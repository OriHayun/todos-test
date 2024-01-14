import React, { useState, useEffect } from "react";
import { ITodo } from "./common/interfaces/todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

interface props {}

export const App: React.FC<props> = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log("data = ", data);
        setTodos(data);
      })
      .catch((error) => console.error("error = ", error));
  }, []);

  const addTodo = (text: string, description: string) => {
    const newTodo: ITodo = {
      title: text,
      description: description,
    };
    fetch("http://localhost:3001/todos/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
      credentials: "include", // Include credentials if necessary (e.g., cookies)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTodos([...todos, newTodo]);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const removeTodo = (title: string) => {
    fetch(`http://localhost:3001/todos/delete/${title}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Include credentials if necessary (e.g., cookies)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setTodos(todos.filter((todo: ITodo) => todo.title != title));
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="app">
      <header>
        <h1>Todo App</h1>
      </header>
      <main>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </main>
    </div>
  );
};

export default App;
