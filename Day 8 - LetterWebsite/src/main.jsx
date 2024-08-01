import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Letter from "./pages/letter/Letter";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home/>,
  },
  {
    path: "/letter",
    element: <Letter/>
  },
  {
    path: "*",
    element: <h1>Page not found</h1>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
