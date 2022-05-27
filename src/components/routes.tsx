import DashboardLayout from "./pages/DashboardLayout";
import { Navigate } from "react-router-dom";
import CandidatesPage from "./pages/CandidatesPage";
import PositionsPage from "./pages/PositionsPage";
import SchedulePage from "./pages/SchedulePage";
import ReportsPage from "./pages/ReportsPage";
import FlowPage from "./pages/FlowPage";
import Form from "../CVBuilder/pages/Form"

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <Navigate to="/candidates" />, exact: true},
      { path: "candidates", element: <CandidatesPage /> },
      { path: "flow", element: <FlowPage /> },
      { path: "positions", element: <PositionsPage /> },
      { path: "schedule", element: <SchedulePage /> },
      { path: "reports", element: <ReportsPage /> },
      { path: "cv", element: <Form /> },
    ],
  },
];

export default routes;
