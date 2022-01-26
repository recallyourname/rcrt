import DashboardLayout from "./DashboardLayout";
import { Navigate } from "react-router-dom";
import CandidatesPage from "./pages/CandidatesPage";

const routes = [
	{path: "/", element: <DashboardLayout />}, 
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
        { path: "/", element: <Navigate to="/candidates" />, exact: true },
        { path: "candidates", element: <CandidatesPage /> },
    ],
  },
];

export default routes;
