import React from "react";
import { FC } from "react";
import style from "./style/NavigationElement.module.css"

interface IProps {
  navigationElementTitle: string;
  emoji?: string;
}

const NavigationElement: FC<IProps> = (props) => {
  return (
    <li className={style.listElement}>
			<div className="navElementTitle">
				<span className={style.emoji}>{props.emoji}</span>
				{props.navigationElementTitle}
			</div> 
    </li>
  );
};

export default NavigationElement;
