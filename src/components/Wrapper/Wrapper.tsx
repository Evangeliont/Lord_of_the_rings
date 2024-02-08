import React from "react";
import s from "./wrapper.module.scss";

interface props {
  children?: React.ReactNode;
}

export const Wrapper = ({ children }: props) => {
  return <div className={s.container}>{children}</div>;
};
