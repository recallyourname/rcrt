import React from "react";
import { FC, useState, useEffect } from "react";
import ConsoleContainer from "../consoleComponents/ConsoleContainer";
import styles from "./ConsolePage.module.css";
import Todo from "../../todo/Todo"

interface IProps {}

const ConsolePage: FC<IProps> = (props) => {
  return (
    <div style={{margin: 0, padding: 0}}>
      <div className={styles.uppercontainer}>
        <div className={styles.todocontainer}>
          <ConsoleContainer>
            <Todo />
          </ConsoleContainer>
        </div>
        <div className={styles.calendarcontainer}>
          <ConsoleContainer>два</ConsoleContainer>
        </div>
      </div>

      <div className={styles.buttonscontainer}>
        <ConsoleContainer>три</ConsoleContainer>
      </div>
    </div>
  );
};

export default ConsolePage;
