import React from "react";
import ReactDOM  from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Home } from "./src/components/Index";

function App(){
    return(
        <div>
        <Home />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);