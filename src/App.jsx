import "./App.css";
import { Compo } from "./components/eg-1/Compo";
import LightDarkMode from "./components/eg-2/LightDarkMode";
import Todo from "./components/eg-3/Todo";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import About from "./components/eg-4/About";
import Home from "./components/eg-4/Home";
import TodoDetails from "./components/eg-4/TodoDetails";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/todo/:id",
    element: <TodoDetails />,
  },
]);

export default function App() {
  return (
    <div className="container mx-auto max-w-4xl">
      {/* <Compo
        name="Patel Anuj"
        number={23}
      /> */}
      {/* <LightDarkMode /> */}
      {/* <Todo /> */}

      <RouterProvider router={appRouter} />
    </div>
  );
}
