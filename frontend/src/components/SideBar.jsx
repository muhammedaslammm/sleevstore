import { useContext, useState } from "react";
import { StoreContext } from "../context/storeContext";

const SideBar = ({ sidebar, setSidebar, handleFilters, path }) => {
  let { categories, price_ranges } = useContext(StoreContext);
  let [activeFilter, setActiveFilter] = useState({
    category: path,
    price: null,
  });

  const styleFilter = (field, value) => {
    setActiveFilter((prevStyle) => ({
      ...prevStyle,
      [field]: prevStyle[field] === value ? null : value,
    }));
  };

  return (
    <>
      <div
        className={`collections__sidebar sticky overflow-hidden left-[.5rem] top-[6rem] h-[25rem] s:h-[26rem] s:top-[6.5rem] sm:h-[28rem] sm:top-[7rem] md:top-[7.2rem] bg-white ${
          sidebar ? "w-[60%] sm:w-[50%] p-[.6rem]" : "w-[.2rem] pl-[1rem]"
        } md:w-[34%] border border-neutral-600/55 mt-[1.5rem] mb-[1.5rem] md:px-[.8rem] md:py-[.5rem]`}
      >
        <i
          className={`fa-solid fa-left-right md:text-[0] absolute  top-[.6rem] ${
            sidebar ? "right-[.6rem]" : "right-0"
          }  text-neutral-700`}
          onClick={() => setSidebar(!sidebar)}
        ></i>
        <div className="sidebar__head font-semibold text-[.8rem] s:text-[.9rem] sm:text-[1rem]">
          Filter By
        </div>
        <div className="filters flex flex-col gap-[.5rem]">
          <div className="filter--category mt-[.3rem]">
            <div className="filter__head font-medium text-[.8rem] s:text-[.9rem] sm:text-[1rem] py-[.2rem] border-t border-b border-black/20">
              Category
            </div>
            <ul className="filter__dropdown">
              <li
                className={`hover:bg-neutral-200 active:bg-neutral-300/80 cursor-pointer text-[.8rem] s:text-[.9rem] sm:text-[1rem] py-[.25rem] ${
                  activeFilter.category === "all-products"
                    ? "font-semibold"
                    : ""
                }`}
                onClick={() => {
                  handleFilters("category", "all-products");
                  styleFilter("category", "all-products");
                }}
              >
                All Products
              </li>
              {categories.map((category) => (
                <li
                  className={`capitalize text-[.8rem] s:text-[.9rem] sm:text-[1rem] py-[.25rem] hover:bg-neutral-200 active:bg-neutral-300/80 cursor-pointer ${
                    activeFilter.category === category.endpoint
                      ? "font-semibold"
                      : ""
                  }`}
                  onClick={() => {
                    handleFilters("category", category.endpoint);
                    styleFilter("category", category.endpoint);
                  }}
                >
                  {category.category_name}
                </li>
              ))}
            </ul>
          </div>
          <div className="filter--price">
            <div className="filter__head font-medium text-[.8rem] s:text-[.9rem] sm:text-[1rem] py-[.2rem] border-t border-b border-black/20">
              Price
            </div>
            <ul className="">
              {price_ranges.map((price) => (
                <li
                  className={`text-[.8rem] s:text-[.9rem] sm:text-[1rem] py-[.25rem] hover:bg-neutral-200 active:bg-neutral-300/80 cursor-pointer ${
                    activeFilter.price === price ? "font-semibold" : ""
                  }`}
                  onClick={() => {
                    handleFilters("price", price);
                    styleFilter("price", price);
                  }}
                >
                  {price}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
