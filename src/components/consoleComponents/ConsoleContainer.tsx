import { FC } from "react";
import style from "./ConsoleContainer.module.css"


interface IProps {
    children? : React.ReactChild;
}

const ConsoleContainer: FC<IProps> = (props) => {
  return (
    <div className={style.container}>
        {props.children}
    </div>
  );
};

export default ConsoleContainer;