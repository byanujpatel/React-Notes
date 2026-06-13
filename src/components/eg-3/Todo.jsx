import React, { useState } from "react";
import { useFetchTodo } from "./useFetchTodo";

export default function Todo() {
  const [input, setInput] = useState("");

  const todos = useFetchTodo();
  console.log("todo component is rendered");
  return (
    <div>
      <h1>Todo</h1>
      {todos.map((todo) => (
        <div key={todo} className="bg-gray-200 rounded-2xl p-2 my-2">
          <h1>{todo.title}</h1>
        </div>
      ))}
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Type something"
        className="p-2 border-2"
      />
    </div>
  );
}
