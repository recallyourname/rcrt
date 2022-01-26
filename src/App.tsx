import React from "react";
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import NavigationSidebar from "./components/pages/Navigation/NavigationSidebar";
import Content from "./components/pages/Content";
import CandidatesPage from "./components/pages/CandidatesPage";
import DashboardLayout from "./components/DashboardLayout"

function App() {
  let routes = useRoutes([
    { path: "/", element: <DashboardLayout /> },
    {
      path: "/",
      element: <CandidatesPage />,
      children: [
        { path: "/", element: <Navigate to="/candidates" /> },
        { path: "candidates", element: <CandidatesPage /> },
      ],
    },
  ])

  return routes;
}

export default App;
