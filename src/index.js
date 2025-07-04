// index.js or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import TextAnalyzer from "./features/TextAnalyzer";
import Home from "./components/Home";
import { createBrowserRouter,Outlet, RouterProvider } from "react-router";
const App = () => {
  return (
    <div className="logo">
      {/* <h1 className="text-2xl font-bold">RealityCheck</h1> */}
      {/* Your main component goes here */}
      <Outlet/>
      
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // 👈 Use App as layout
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "realAI",
        element: <TextAnalyzer />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);