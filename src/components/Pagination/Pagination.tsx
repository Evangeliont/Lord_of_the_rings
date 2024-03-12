import s from "./pagintaion.module.scss";

interface PaginationProps {
  pageNumbers: number[];
  onChangePage: (pageNumber: number) => void;
}

export const Pagination = ({ pageNumbers, onChangePage }: PaginationProps) => {
  return (
    <div className={s.pagination}>
      {pageNumbers.map((number) => (
        <button
          className={s.paginationButton}
          key={number}
          onClick={() => onChangePage(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};
