import React, { FC } from "react";
import style from "./style/Bubble.module.css";

interface IProps {
	technology: string;
}

const Bubble: FC<IProps> = (props) => {
  return <div className={style.bubbleCointaner}>{props.technology}</div>;
};

export default Bubble;
