import s from "./search.module.scss";

export const Search = () => {
  return (
    <button className={s.search}>
      <label className={s.searchWrapper}>
        <span className={s.searchLabel}>Search:</span>
        <input className={s.searchInput} type="text" />
      </label>
    </button>
  );
};
