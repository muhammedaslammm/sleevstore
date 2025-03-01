const CollectionSort = ({ sort, setSort }) => {
  return (
    <div className="group collection__sort relative ">
      <button className="border border-neutral-700/60 w-[5.6rem] truncate px-[.4rem] py-[.2rem] text-[.7rem] s:text-[.75rem] s:w-[7rem] s:px-[.6rem] sm:text-[.79rem] sm:w-[9rem] sm:px-[.75rem] md:px-[.9rem] lg:text-[.8rem] lg:w-[10rem] lg:py-[.25rem] lg:px-[1rem]  border-neutral-400 xl:w-[11rem] xl:text-[.85rem] ">
        Sort: {sort}
      </button>
      <ul className="sort__dropdown hidden group-hover:block w-full absolute bg-white border border-neutral-300 text-[.7rem] s:text-[.75rem] sm:text-[.79rem] md:text-[.8rem] lg:text-[.9rem]">
        <li
          className="p-[.2rem] hover:bg-neutral-400/40 cursor-pointer"
          onClick={() => setSort("Price Low to High")}
        >
          Price Low to High
        </li>
        <li
          className="p-[.2rem] hover:bg-neutral-400/40 cursor-pointer"
          onClick={() => setSort("Price High to Low")}
        >
          Price High to Low
        </li>
      </ul>
    </div>
  );
};

export default CollectionSort;
