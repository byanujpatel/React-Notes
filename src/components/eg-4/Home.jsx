import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>HOME Page</h1>
      <nav className="flex items-center gap-5">
        <Link to={"/about"}>About</Link>
        <Link to={"/todo"}>Todo</Link>
      </nav>
    </div>
  );
}
