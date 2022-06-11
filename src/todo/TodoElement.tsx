import React from "react";
import { FC, useState, useRef, createRef } from "react";
import style from "./TodoElement.module.css";
import { Checkbox, FormControlLabel } from "@mui/material";

interface IProps {
  todoTitle: string;
  index: number;
  removeCallback: (key: number) => void;
}

const TodoElement: FC<IProps> = (props) => {
  return (
    <li>
      <div className={style.todoContainer}>
        <FormControlLabel
          control={
            <Checkbox
              id={props.todoTitle}
              onChange={() => {
                props.removeCallback(props.index);
              }}
            />
          }
          label={props.todoTitle}
        />
      </div>
    </li>
  );
};

export default TodoElement;
