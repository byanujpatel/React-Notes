import { useEffect } from "react";
import { useState } from "react";

export function useFetchTodo() {
  const [todos, setTodos] = useState([]);

  const fetchTodo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const jsondata = await res.json();
    setTodos(jsondata);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return todos;
}
