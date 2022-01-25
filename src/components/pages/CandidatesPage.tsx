import React from "react";
import { FC } from "react";
import Table from "./utils/Table";

interface IProps {}

const CandidatesPage: FC<IProps> = (props) => {
  return (
    <div>
      <Table
        tableHeaders={[
          { title: "Candidate" },
          { title: "Date" },
          { title: "Technology" },
          { title: "Data" },
        ]}
      />
    </div>
  );
};

export default CandidatesPage;
