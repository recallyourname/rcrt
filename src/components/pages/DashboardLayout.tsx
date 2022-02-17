import React, { FC } from "react";
import NavigationSidebar from "../Navigation/NavigationSidebar";
import { Outlet } from "react-router-dom";
import style from "./style/DashboardLayout.module.css"

interface IProps {
  children?: React.ReactNode;
}

const DashboardLayout: FC<IProps> = (props) => {
  return (
    <div>
      <div className={style.sidebar}>
        <NavigationSidebar
          menuElements={[
            {
              title: "Candidates",
              path: "/candidates",
              emoji: "🧑‍💻",
              current: true,
            },
            { title: "Flow", path: "/flow", emoji: "📈", current: false },
            {
              title: "Positions",
              path: "/positions",
              emoji: "💼",
              current: false,
            },
            {
              title: "Schedule",
              path: "/schedule",
              emoji: "📅",
              current: false,
            },
            { title: "Reports", path: "/reports", emoji: "📝", current: false },
          ]}
        />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
