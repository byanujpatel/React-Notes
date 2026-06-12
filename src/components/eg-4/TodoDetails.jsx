import React from "react";
import { useParams } from "react-router-dom";

export default function TodoDetails() {
  const params = useParams();
  console.log(params, "P");
  return <div>TodoDetails {params.id}</div>;
}
