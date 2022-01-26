import React, { FC } from "react";
import NavigationSidebar from "./pages/Navigation/NavigationSidebar";
import Content from "./pages/Content";
import CandidatesPage from "./pages/CandidatesPage";

interface IProps {
    children?: React.ReactNode;
}

const DashboardLayout: FC<IProps> = (props) => {
  return (
    <div>
      <NavigationSidebar
        menuElements={[
          { title: "Candidates", path: "/candidates", emoji: "🧑‍💻", current: true },
          { title: "Flow", path: "/flow",  emoji: "📈", current: false },
          { title: "Positions", path: "/positions", emoji: "💼", current: false },
          { title: "Schedule", path: "/schedule", emoji: "📅", current: false },
          { title: "Reports", path: "/reports", emoji: "📝", current: false },
        ]}
      />
      <Content childComponent={props.children} />
    </div>
  );
};

export default DashboardLayout;
