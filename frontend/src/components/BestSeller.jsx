import { useState, useEffect } from "react";
import { useContext } from "react";
import { StoreContext } from "../context/storeContext";
import ProductCard from "./ProductCard";
import Title from "./Title.jsx";

const BestSeller = () => {
  const [bestSellers, setBestSellers] = useState([]);
  let { products } = useContext(StoreContext);
  useEffect(() => {
    let bestsellingProducts = products.filter((product) => product.best_seller);
    console.log("best selling products: ", bestsellingProducts);

    setBestSellers(bestsellingProducts);
  }, []);
  return (
    <div className="best__seller w-[90%] mx-auto mt-[3rem] sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[45%]">
      <Title title={"Best Selling Products"} />
      <div className="best-selling__products grid xs:grid-cols-[14rem] s:grid-cols-[14rem,14rem] justify-center gap-[4rem] s:gap-[1rem] s:gap-y-[3rem] sm:grid-cols-2 mt-[.5rem]">
        {bestSellers.map((product, index) => (
          <ProductCard
            key={index}
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
export default BestSeller;
