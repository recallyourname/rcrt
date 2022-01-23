import React from "react";
import { FC } from "react";
import style from "./styles/Table.module.css";

interface IProps {
  tableHeaders: {
    title: string;
  }[];
}

const Table: FC<IProps> = (props) => {
  const headers = props.tableHeaders.map((header) => (
    <div className={style.tableHeader}>{header.title}</div>
  ));

  return (
    <>
      <div className={style.headerContainer}>{headers}</div>
    </>
  );
};

export default Table;
