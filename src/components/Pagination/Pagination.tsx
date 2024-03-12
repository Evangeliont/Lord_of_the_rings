interface PaginationProps {
  pageNumbers: number[];
  onChangePage: (pageNumber: number) => void;
}

export const Pagination = ({ pageNumbers, onChangePage }: PaginationProps) => {
  return (
    <div>
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => onChangePage(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};
