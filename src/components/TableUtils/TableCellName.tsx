import React, { FC } from "react";
import style from "./style/TableRow.module.css";

interface IProps {
	name: string;
	width: string;
}

const TableCellName: FC<IProps> = (props) => {
  return <div style={{width: props.width}}>{props.name}</div>;
};

export default TableCellName;
