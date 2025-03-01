const CollectionSearch = () => {
  return (
    <form
      action=""
      className="collection__search flex gap-[.3rem] w-[60%] s:w-[50%] lg:w-[45%] xl:w-[40%] "
    >
      <input
        type="text"
        className="border border-neutral-400 outline-none px-[.5em] s:py-[.1rem] lg:py-[.15rem] flex-grow w-[70%]"
      />
      <button className="bg-neutral-950 text-white px-[.8rem] py-[.2rem]  rounded-[.2rem] w-[20%] text-[.65rem] sm:text-[.75rem] md:text-[.85rem] text-center capitalize flex justify-center items-center">
        search
      </button>
    </form>
  );
};

export default CollectionSearch;
