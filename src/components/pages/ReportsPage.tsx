import React, { FC } from "react";
import DashboardLayout from "./DashboardLayout";
import style from "./style/Reports.module.css";

interface IProps {}

const ReportsPage: FC<IProps> = (props) => {
  return <div className={style.container}>Reports</div>;
};

export default ReportsPage;
