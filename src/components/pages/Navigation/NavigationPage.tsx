import React from "react";
import { FC } from "react";
import NavigationElement from "./NavigationElement";
import style from "./style/NavigationPage.module.css";

interface IProps {
  menuElements: {
    title: string;
    emoji: string;
  }[];
}

const NavigationPage: FC<IProps> = (props) => {
  const menuElements = props.menuElements.map((item) => (
    <NavigationElement emoji={item.emoji} navigationElementTitle={item.title} />
  ));

  return (
    <div className={style.navContainer}>
      <nav>
        <ul>{menuElements}</ul>
      </nav>
    </div>
  );
};

export default NavigationPage;
