import CategoryCard from "./CategoryCard";
import Title from "./Title";
import { useContext, useState, useEffect } from "react";
import { StoreContext } from "../context/storeContext";
import { Link } from "react-router-dom";

const Categories = () => {
  let [myCategories, setMyCategories] = useState([]);
  let { categories } = useContext(StoreContext);
  useEffect(() => {
    setMyCategories(categories);
  }, []);
  return (
    <div className="categories__section w-[90%] md:w-[80%] lg:w-[72%] xl:w-[60%] mx-auto mt-[1.5rem] md:mt-[1.3rem] lg:mt-[2rem] xl:mt-[2.5rem]">
      <Title title={"Our Categories"} />
      <div className="categories grid grid-cols-3 auto-rows-[7rem] sm:auto-rows-[9rem] md:auto-rows-[9rem] lg:auto-rows-[10rem] xl:auto-rows-[10.5rem] overflow-hidden  gap-[1rem] lg:gap-[1.8rem] mt-[.5rem] md:my-[.6rem]">
        {myCategories.map((category, index) => (
          <Link
            key={index}
            to={`/collections/${category.endpoint}`}
            className="relative"
          >
            <CategoryCard category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
