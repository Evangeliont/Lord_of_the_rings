import { FC, ReactNode } from "react";
import s from "./container.module.scss";

interface IContainer {
  children?: ReactNode;
}

export const Container: FC<IContainer> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
