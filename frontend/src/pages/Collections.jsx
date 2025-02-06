import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { StoreContext } from "../context/storeContext";
import ProductCard from "../components/ProductCard";

const Collections = () => {
  let path = useParams();
  const { categories, products } = useContext(StoreContext);
  let [filter, setFilter] = useState("Select");
  let [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    if (path.category === "all-products") setFilter(`All Products`);
    else setFilter(path.category.split("-").join(" "));
  }, []);

  useEffect(() => {
    let allproducts = products.filter((product) => {
      if (path.category === "all-products") return product;
      else if (product.category === path.category) return product;
    });
    setMyProducts(allproducts);
  }, []);

  const manageFilter = (category) => {
    let myProducts = products.filter(
      (product) => product.category === category
    );
    setMyProducts(myProducts);
    setFilter(category.split("-").join(" "));
  };

  return (
    <div className="sleevestore__collections relative mt-[3.1rem] s:mt-[3.2rem] sm:mt-[3.6rem] md:mt-[3.7rem] w-[90%] md:w-[85%] mx-auto ">
      <div className="collections__top flex w-full justify-between items-center gap-[1rem]">
        <form action="" className="flex gap-[.3rem] w-[60%] s:w-[50%] ">
          <input
            type="text"
            className="border border-neutral-400 outline-none px-[.5em] s:py-[.1rem] flex-grow w-[70%]"
          />
          <button className="bg-neutral-950 text-white px-[.8rem] py-[.2rem]  rounded-[.2rem] w-[20%] text-[.65rem] sm:text-[.75rem] md:text-[.85rem] text-center capitalize flex justify-center items-center">
            search
          </button>
        </form>
        <div className="collections__filter-box group relative w-[35%] s:w-[30%]">
          <div className="filter text-[.65rem] sm:text-[.75rem] md:text-[.8rem] border border-neutral-600/60 py-[.2rem] s:py-[.3rem] px-[.3rem] md:px-[.5rem] capitalize">
            {`Filter > ${filter}`}
          </div>
          <ul className="filter__options absolute hidden group-hover:block bg-neutral-900 text-white w-full right-0 py-[.2rem] px-[.5rem]">
            {categories.map((category, index) => (
              <li
                key={index}
                className="py-[.5rem] capitalize text-[.65rem] hover:bg-neutral-800"
                onClick={() => manageFilter(category.endpoint)}
              >
                {category.endpoint.split("-").join(" ")}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="collection__products w-[80%] s:w-full  grid grid-cols-[minmax(11rem,1fr)] s:grid-cols-2  sm:grid-cols-3 justify-center  mx-auto mt-[1.5rem] mb-[5rem] gap-y-[2rem] gap-x-[.5rem]">
        {myProducts.map((product) => (
          <ProductCard
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
