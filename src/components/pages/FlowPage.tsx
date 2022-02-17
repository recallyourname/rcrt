import React, { FC } from "react";
import DashboardLayout from "./DashboardLayout";
import style from "./style/Flow.module.css";

interface IProps {}

const FlowPage: FC<IProps> = (props) => {
  return <div className={style.container}>FLOW</div>;
};

export default FlowPage;
