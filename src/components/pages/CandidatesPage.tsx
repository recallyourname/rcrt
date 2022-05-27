import React from "react";
import { FC, useState, useEffect } from "react";
import Table from "./utils/Table";
import DashboardLayout from "./DashboardLayout";
import candidates from "../../data/candidates";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridValueFormatterParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Chip } from "@mui/material";

interface IProps {}

const CandidatesPage: FC<IProps> = (props) => {
  const rows: GridRowsProp = [
    {
      id: 1,
      name: "Никита Ведькал",
      position: "React разработчик",
      skills: ["React", "Typescript", "Python", "Django"],
      contacts: "tg: @recallyourname"
    },
    {
      id: 2,
      name: "Василий Петров",
      position: "Java разработчик",
      skills: ["Java", "Spring", "Boot", "JavaEE"],
      contacts: "tg: @javadev1337"
    },
    {
      id: 3,
      name: "Кирилл Дмитриев",
      position: "iOS разработчик",
      skills: ["Swift", "SwiftUI", "UIKit", "Storyboards"],
      contacts: "tg: @iloveappledevices"
    },
    {
      id: 4,
      name: "Петр Васильев",
      position: "Android разработчик",
      skills: ["Kotlin", "Dagger", "Android SDK"],
      contacts: "tg: @recallyourname"
    },
  ];
  const columns: GridColDef[] = [
    { field: "name", headerName: "Имя", minWidth: 170 },
    { field: "position", headerName: "Направление", minWidth: 200 },
    {
      field: "skills",
      headerName: "Навыки",
      minWidth: 400,
      renderCell: (params: GridRenderCellParams<String[]>) => (
        params.value && params.value.map((skill) => (
          <Chip label={skill} />
        ))
      )
    },
    { field: "contacts", headerName: "Контакты", minWidth: 200 },
  ];

  return (
    <div style={{ height: 820, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default CandidatesPage;
