import React, { FC } from "react";
import DashboardLayout from "./DashboardLayout";
import style from "./style/Schedule.module.css";

interface IProps {}

const SchedulePage: FC<IProps> = (props) => {
  return <div className={style.container}>Schedule</div>;
};

export default SchedulePage;
