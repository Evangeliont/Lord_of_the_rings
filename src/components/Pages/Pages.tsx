import { List } from "../List/List";
import s from "./pages.module.scss";

export const Page = () => {
  return (
    <aside className={s.pagesBackground}>
      <List>30</List>
    </aside>
  );
};
