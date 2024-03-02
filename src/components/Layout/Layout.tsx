import { FC, ReactNode } from "react";
import s from "./layout.module.scss";

interface Layout {
  children?: ReactNode;
}
export const Layout: FC<Layout> = ({ children }) => {
  return <div className={s.layout}>{children}</div>;
};
