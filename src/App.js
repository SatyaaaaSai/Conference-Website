import React from "react";
import ReactDOM from "react-dom/client"
import HomePage from "./components/HomePage";

const AppLayout = () => {
  return (
    <div>
      <h1>Hello</h1>
      <HomePage/>
    </div>
  );
};

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)