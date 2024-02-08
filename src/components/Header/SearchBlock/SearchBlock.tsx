import s from "./searchBlock.module.scss";

export const SearchBlock = () => {
  return (
    <form className={s.searchBlock}>
      <input className={s.searchInput} type="search" />
      <button className={s.searchButton} type="submit">
        Search
      </button>
    </form>
  );
};
