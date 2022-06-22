import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import { FC, useState, useRef, createRef } from "react";
import style from "./Todo.module.css";
import TodoElement from "./TodoElement";
import { observer } from "mobx-react-lite"
import TodoList from "../models/TodoList"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Todo: FC = () => {
  const [tasksList, setTasksList] = useState<string[]>([]);
  const [task, setTask] = useState("");
  const [inputEmpty, setInputEmpty] = useState(true);

  const handleSubmit: React.ReactEventHandler = (e) => {
    e.preventDefault();
    setTask("");
    setInputEmpty(true);
    setTasksList([...tasksList, task]);
  };

  const handleRemove = (index: number): void => {
    setTimeout(() => {
      const tempTasks = [...tasksList];
      tempTasks.splice(index, 1);
      setTasksList(tempTasks);
    }, 300);
  };

  return (
    <div className={style.container}>
      <Tabs>
        <TabList>
          <Tab>Текущие задачи</Tab>
          <Tab>Выполненные задачи</Tab>
        </TabList>
      </Tabs>
      <h1>Список задач</h1>
      <div className={style.taskContainer}>
        <ul>
          {tasksList.map((task, index) => (
            <div key={task}>
              <TodoElement
                removeCallback={handleRemove}
                todoTitle={task}
                index={index}
              />
            </div>
          ))}
        </ul>
      </div>
      <div className={style.inputContainer}>
        <form>
          <TextField
            id="outlined-name"
            label="Новая задача"
            value={task}
            onChange={(e) => {
              setInputEmpty(false);
              setTask(e.target.value);
            }}
          />
        </form>
        <Button disabled={inputEmpty} onClick={handleSubmit} variant="outlined">
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default Todo;


