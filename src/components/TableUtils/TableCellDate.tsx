import React, { FC } from "react";
import style from "./style/TableRow.module.css";

interface IProps {
  date: string;
  width: string;
}

const TableCellDate: FC<IProps> = (props) => {
  return <div style={{ width: props.width }}>{props.date}</div>;
};

export default TableCellDate;
