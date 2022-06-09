import React, { FC } from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridValueFormatterParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";

interface IProps {}

const PositionsPage: FC<IProps> = (props) => {
  const rows: GridRowsProp = [
    {
      id: 1,
      position_name: "Senior React Developer",
      speciality: "Веб-разработка",
      requried_skills: ["React", "Typescript", "Redux"],
      priority: "Наивысшая"
    },
    {
      id: 2,
      position_name: "Senior Android Developer",
      speciality: "Мобильная разработка",
      requried_skills: ["Kotlin", "Koin", "Dagger", "Android SDK"],
      priority: "Наивысшая"
    },
    {
      id: 3,
      position_name: "Senior iOS Developer",
      speciality: "Мобильная разработка",
      requried_skills: ["Swift", "RXSwift", "Cocoapods"],
      priority: "Средняя"
    },
    {
      id: 4,
      position_name: "Middle Node.js Developer",
      speciality: "Бекенд разработка",
      requried_skills: ["Javascript", "Typescript", "Node.js", "Express.js"],
      priority: "Низкая "
    },
    {
      id: 5,
      position_name: "Intern React Developer",
      speciality: "Веб-разработка",
      requried_skills: ["React", "Typescript", "Redux"],
      priority: "Средняя"
    },
    {
      id: 6,
      position_name: "Junior iOS Developer",
      speciality: "Веб-разработка",
      requried_skills: ["Swift", "RXSwift", "Cocoapods"],
      priority: "Наивысшая"
    },
    {
      id: 7,
      position_name: "Middle React Developer",
      speciality: "Веб-разработка",
      requried_skills: ["React", "Typescript", "Redux"],
      priority: "Низкая"
    }
  ];
  const columns: GridColDef[] = [
    { field: "position_name", headerName: "Имя", minWidth: 250 },
    { field: "speciality", headerName: "Направление", minWidth: 200 },
    {
      field: "requried_skills",
      headerName: "Требуемые Навыки",
      minWidth: 400,
      renderCell: (params: GridRenderCellParams<String[]>) => (
        params.value && params.value.map((skill) => (
          <Chip label={skill} />
        ))
      )
    },
    { field: "priority", headerName: "Важность", minWidth: 200 },
  ];

  return (
    <div style={{ height: 820, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default PositionsPage;
