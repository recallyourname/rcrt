import React, { FC } from "react";
import style from "./style/TableRow.module.css";
import TableCellDate from "./TableCellDate";
import TableCellName from "./TableCellName";
import TableCellTechnology from "./TableCellTechnology";

interface IProps {
  data: {
    candidate_name: string;
    date: string;
    technology: string[];
  };
  cellWidth: string;
}

const TableRow: FC<IProps> = (props) => {
  return (
    <div className={style.rowContainer}>
      <TableCellName name={props.data.candidate_name} width={props.cellWidth} />
      <TableCellDate date={props.data.date} width={props.cellWidth} />
      <TableCellTechnology
        technology={props.data.technology}
        width={props.cellWidth}
      />
    </div>
  );
};

export default TableRow;
