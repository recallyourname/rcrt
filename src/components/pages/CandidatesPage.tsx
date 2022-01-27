import React from "react";
import { FC } from "react";
import Table from "./utils/Table";
import DashboardLayout from "./DashboardLayout"

interface IProps {}

const CandidatesPage: FC<IProps> = (props) => {
  return (
    <DashboardLayout>
      <Table
        tableHeaders={[
          { title: "Candidate" },
          { title: "Date" },
          { title: "Technology" },
          { title: "Data" },
        ]}
      />
    </DashboardLayout>
  );
};

export default CandidatesPage;
