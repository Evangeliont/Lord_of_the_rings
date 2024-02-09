import React from "react";
import s from "./main.module.scss";

interface props {
  children?: React.ReactNode;
}

export const Main = ({ children }: props) => {
  return <main className={s.container}>{children}</main>;
};
