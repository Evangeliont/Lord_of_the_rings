import React from "react";
import s from "./layout.module.scss";

interface props {
  children?: React.ReactNode;
}

export const Layout = ({ children }: props) => {
  return <main className={s.container}>{children}</main>;
};
