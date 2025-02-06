const Search = () => {
  return (
    <div className="sm:hidden search__section mt-[3rem] sm:mt-[3.5rem] md:mt-[4rem] w-[90%] md:w-[85%] mx-auto grid grid-cols-[1fr,auto] gap-[.3rem] px-[.6rem] py-[.5rem] rounded-[.2rem] bg-neutral-400/25">
      <input
        type="email"
        className="outline-none  rounded-[.1rem] p-[.09rem]"
      />
      <button className="bg-black text-white px-[.8rem] text-[.7rem] font-medium rounded-[.2rem]">
        Search
      </button>
    </div>
  );
};

export default Search;
