const PaginationBlock = ({ pageNumber, setPageNumber, totalPages }) => {
  let incrementPageNumber = () => {
    if (pageNumber !== totalPages)
      setPageNumber((previousPageNumber) => previousPageNumber + 1);
  };
  let decrementPageNumber = () => {
    if (pageNumber !== 1)
      setPageNumber((previousPageNumber) => previousPageNumber - 1);
  };
  return (
    <div className="pagination__block w-[95%] md:w-[80%] ml-auto flex items-center justify-center gap-[1.8rem]">
      <button
        className="button--minufont-semibold border border-neutral-600 w-[2rem] text-[1.5rem] rounded-sm"
        onClick={() => decrementPageNumber()}
      >
        -
      </button>
      <div className="page-number text-[1.15rem]">{pageNumber}</div>
      <button
        className="button--add font-semibold border border-neutral-600 w-[2rem] text-[1.5rem] rounded-sm"
        onClick={() => incrementPageNumber()}
      >
        +
      </button>
    </div>
  );
};

export default PaginationBlock;
