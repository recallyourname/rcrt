import React from "react";
import { FC } from "react";
import style from "./styles/Table.module.css";
import TableRow from "../../TableUtils/TableRow"

interface IProps {
  tableHeaders: {
    title: string;
  }[];
  tableData: {
    candidate_name: string;
    date: string;
    technology: string[];
  }[];
}

const Table: FC<IProps> = (props) => {
  var column_width = 100 / props.tableHeaders.length + "%";

  const headers = props.tableHeaders.map((header) => (
    <div className={style.tableHeader} style={{ width: column_width }}>
      {" "}
      {header.title}
    </div>
  ));

  const rows = props.tableData.map((row) => (
    <TableRow data={row} cellWidth={column_width}/>
  ))

  return (
    <>
      <div className={style.headerContainer}>{headers}</div>
      <div>{rows}</div>
    </>
  );
};

export default Table;
