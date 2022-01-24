import React from "react";
import { FC } from "react";
import style from "./style/NavigationElement.module.css";

interface IProps {
  navigationElementTitle: string;
  emoji?: string;
  current?: boolean;
}

const NavigationElement: FC<IProps> = (props) => {
  return (
    <li
      className={style.listElement}
      // style={{ backgroundColor: props.current ? "#b9b8b5" : "#ebeced" }}
    >
      <span className={style.emoji}>{props.emoji}</span>
      {props.navigationElementTitle}
    </li>
  );
};

export default NavigationElement;
