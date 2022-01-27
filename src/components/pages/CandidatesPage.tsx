import React from "react";
import { FC } from "react";
import Table from "./utils/Table";
import DashboardLayout from "./DashboardLayout"

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
      />
  );
};

export default CandidatesPage;
