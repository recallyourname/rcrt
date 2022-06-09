import DashboardLayout from "./pages/DashboardLayout";
import { Navigate } from "react-router-dom";
import CandidatesPage from "./pages/CandidatesPage";
import PositionsPage from "./pages/PositionsPage";
import SchedulePage from "./pages/SchedulePage";
import ReportsPage from "./pages/ReportsPage";
import FlowPage from "./pages/FlowPage";
import Form from "../CVBuilder/pages/Form";
import ConsolePage from "../components/pages/ConsolePage";

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" />, exact: true},
      { path: "dashboard", element: <ConsolePage />},
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
