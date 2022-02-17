import React, { FC } from "react";
import Bubble from "./Bubble";
import style from "./style/TableCellTechnology.module.css";

interface IProps {
	technology: string[];
	width: string;
}

const TableCellTechnology: FC<IProps> = (props) => {
	const technologies = props.technology.map((technology) => <Bubble technology={technology} />)

  return <div className={style.container} style={{width: props.width}}>{technologies}</div>;
};

export default TableCellTechnology;
