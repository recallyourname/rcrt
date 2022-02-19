import React, { FC } from "react";
import style from "./style/TableRow.module.css";
import useCellAddValue from "../hooks/useCellAddValue";
import EditCellValue from "./EditCellValue";

interface IProps {
  date: string;
  width: string;
}

const TableCellDate: FC<IProps> = (props) => {
  const [isAddButtonVisible, toggleVisible] = useCellAddValue(false);

  return (
    <div style={{ width: props.width }} onMouseEnter={toggleVisible} onMouseLeave={toggleVisible}>
      {props.date}
      {isAddButtonVisible && <EditCellValue title={"edit"}/>}
    </div>
  );
};

export default TableCellDate;
