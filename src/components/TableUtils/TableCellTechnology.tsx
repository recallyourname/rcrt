import React, { FC } from "react";
import style from "./style/TableRow.module.css";

interface IProps {
	technology: string[];
	width: string;
}

const TableCellTechnology: FC<IProps> = (props) => {
  return <div style={{width: props.width}}>{props.technology}</div>;
};

export default TableCellTechnology;
