import React from "react";
import { FC, useState, useEffect } from "react";
import Table from "./utils/Table";
import DashboardLayout from "./DashboardLayout";
import candidates from "../../data/candidates";

interface IProps {}

const CandidatesPage: FC<IProps> = (props) => {
  return (
    <Table
      tableHeaders={[
        { title: "Candidate" },
        { title: "Date" },
        { title: "Technology" },
        { title: "Data" },
      ]}
      tableData={candidates}
    />
  );
};

export default CandidatesPage;
