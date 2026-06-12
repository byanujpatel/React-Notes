import React, { useState } from "react";

export default function LightDarkMode() {
  const [light, setLight] = useState(true);

  const toggleHandler = () => {
    setLight(!light);
  };

  console.log("Component Rendered");
  return (
    <div>
      <h1 className="font-bold text-5xl">{light ? "Light" : "Dark"}</h1>
      <button
        onClick={toggleHandler}
        className="p-2 rounded bg-amber-600 text-white"
      >
        Click
      </button>
    </div>
  );
}
