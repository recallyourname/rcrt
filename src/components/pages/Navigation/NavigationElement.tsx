import React from "react";
import { FC } from "react";
import style from "./style/NavigationElement.module.css";
import { Link } from "react-router-dom";

interface IProps {
  navigationElementTitle: string;
  path: string;
  emoji?: string;
  current?: boolean;
}

const NavigationElement: FC<IProps> = (props) => {
  return (
    <Link to={props.path} style={{ color: "black", textDecoration: "none" }}>
      <li
        className={style.listElement}
        // style={{ backgroundColor: props.current ? "#b9b8b5" : "#ebeced" }}
      >
        <span className={style.emoji}>{props.emoji}</span>
        {props.navigationElementTitle}
      </li>
    </Link>
  );
};

export default NavigationElement;
