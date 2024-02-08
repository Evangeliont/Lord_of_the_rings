import React from "react";
import s from "./content.module.scss";

interface props {
  children?: React.ReactNode;
}

export const Content = ({ children }: props) => {
  return <div className={s.container}>{children}</div>;
};
