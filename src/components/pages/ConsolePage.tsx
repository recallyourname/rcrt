import React from "react";
import { FC, useState, useEffect } from "react";
import ConsoleContainer from "../consoleComponents/ConsoleContainer";
import styles from "./ConsolePage.module.css";
import Todo from "../../todo/Todo";
import { Button } from "@mui/material";

interface IProps {}

const ConsolePage: FC<IProps> = (props) => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div className={styles.uppercontainer}>
        <div className={styles.todocontainer}>
          <ConsoleContainer>
            <Todo />
          </ConsoleContainer>
        </div>
        <div className={styles.calendarcontainer}>
          <ConsoleContainer>
            <div style={{ paddingLeft: "1rem", paddingTop: "1rem" }}>
              Сегодня <strong>3</strong> мероприятия:
              <ul>
                <li style={{ color: "red" }}>- Защита ВКР : 9:00</li>
                <li>- Встреча с Алексеем Петровым : 13:00</li>
                <li>- Встреча с Максимом Сергеевым : 15:15</li>
              </ul>
            </div>
          </ConsoleContainer>
        </div>
      </div>

      <div className={styles.buttonscontainer}>
        <ConsoleContainer>
          <div
            style={{
              padding: "1rem",
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <Button
              style={{
                backgroundColor: "#2D8CFF",
                color: "white",
                height: "8rem",
              }}
              // onClick={() => window.open(, "_blank")}
            >
              Мгновенная Zoom встреча
            </Button>
            <Button
              style={{ backgroundColor: "#04AC46", color: "White" }}
              onClick={() => window.open("https://meet.new", "_blank")}
            >
              Мгновенная Google встреча
            </Button>
          </div>
        </ConsoleContainer>
      </div>
    </div>
  );
};

export default ConsolePage;
