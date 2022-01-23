import React from "react";
import { FC, useState } from "react";
import NavigationElement from "./NavigationElement";
import style from "./style/NavigationSidebar.module.css";

interface IProps {
  menuElements: {
    title: string;
    emoji: string;
    current?: boolean;
  }[];
}

const NavigationSidebar: FC<IProps> = (props) => {
  const menuElements = props.menuElements.map((item) => (
    <NavigationElement
      emoji={item.emoji}
      navigationElementTitle={item.title}
      current={item.current}
    />
  ));

  return (
    <div className={style.navContainer}>
      <nav>
        <ul>{menuElements}</ul>
      </nav>
    </div>
  );
};

export default NavigationSidebar;
