import React, { FC } from "react";
import style from "./styles/Outlet.module.css";

interface IProps {}

const Outlet: FC<IProps> = (props) => {
  return <div className={style.contentContainer}></div>;
};

export default Outlet;
