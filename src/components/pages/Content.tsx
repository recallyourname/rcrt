import React, { FC } from "react";
import CandidatesPage from "./CandidatesPage";
import style from "./style/Content.module.css";

interface IProps {
	childComponent: React.ReactNode,
}

const Content: FC<IProps> = (props) => {
  return <div className={style.contentContainer}>
		{props.childComponent}
	</div>;
};

export default Content;
