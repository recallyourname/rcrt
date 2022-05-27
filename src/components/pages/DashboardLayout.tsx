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
              title: "Кандидаты",
              path: "/candidates",
              emoji: "🧑‍💻",
              current: true,
            },
            { title: "Рабочий процесс", path: "/flow", emoji: "📈", current: false },
            {
              title: "Вакансии",
              path: "/positions",
              emoji: "💼",
              current: false,
            },
            {
              title: "Расписание",
              path: "/schedule",
              emoji: "📅",
              current: false,
            },
            { title: "Отчеты", path: "/reports", emoji: "📝", current: false },
            { title: "Резюме", path: "/cv", emoji: "👤", current: false },
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
