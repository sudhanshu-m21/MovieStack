import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import GptSearch from "./components/GptSearch";
// import Browse from "./components/Browse";
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/gptSearch",
//         element: <GptSearch />,
//       },
//       {
//         path: "/browse",
//         element: <Browse />,
//       },
//     ],
//   },
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);
root.render(<App />);
reportWebVitals();
