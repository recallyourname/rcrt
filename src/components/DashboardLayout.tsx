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
          { title: "Candidates", emoji: "🧑‍💻", current: true },
          { title: "Flow", emoji: "📈", current: false },
          { title: "Positions", emoji: "💼", current: false },
          { title: "Schedule", emoji: "📅", current: false },
          { title: "Reports", emoji: "📝", current: false },
        ]}
      />
      <Content childComponent={props.children} />
    </div>
  );
};

export default DashboardLayout;
