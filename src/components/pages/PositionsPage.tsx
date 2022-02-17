import React, { FC } from "react";
import DashboardLayout from "./DashboardLayout";
import style from "./style/Positions.module.css";

interface IProps {}

const PositionsPage: FC<IProps> = (props) => {
  return <div className={style.container}>Positions</div>;
};

export default PositionsPage;
