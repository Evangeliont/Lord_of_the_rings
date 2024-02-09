import React from "react";
import s from "./list.module.scss";

interface Props {
  children?: React.ReactNode;
}

export const List = ({ children }: Props) => {
  return (
    <aside>
      <ul className={s.list}>{children}</ul>
    </aside>
  );
};
