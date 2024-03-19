import { SearchableList } from "./SearchableList";
import s from "./search.module.scss";

export const Search = () => {
  return (
    <div className={s.search}>
      <SearchableList />
    </div>
  );
};
