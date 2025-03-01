import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useProduct from "../customeHooks/useProduct";
import ProductPageImage from "../components/ProductImages";
import ProductTitle from "../components/ProductTitle";
import ProductInfo from "../components/ProductInfo";

const ProductPage = () => {
  let { category, productid } = useParams();
  let [product, setProduct] = useState(null);
  let [size, setSize] = useState("");
  useEffect(() => {
    let selectedProduct = useProduct(productid);
    console.log("selected product:", selectedProduct);
    setProduct(selectedProduct);
  }, []);
  return product ? (
    <div className="product__page w-[90%] md:w-[85%] xl:w-[76%] mt-[2.6rem] sm:mt-[3rem] md:mt-[3.2rem] lg:mt-[3.4rem] xl:mt-[3.45rem] mx-auto">
      <div className="links  flex gap-[1rem] text-[.7rem] s:text-[.8rem] sm:text-[.95rem] md:text-[1rem]">
        <Link to={`/collections/${category}`} className="text-purple-900">
          {category}
        </Link>
        {`>`}
        <span>{product.name}</span>
      </div>
      <div className="product__page__top flex flex-col md:flex-row gap-[.4rem] sm:gap-[1rem] md:gap-[1.5rem] lg:gap-[3rem] mt-[.5rem] md:mt-[1rem]">
        <ProductTitle
          title={product.name}
          price={product.price}
          quantity={product.quantity}
        />
        <ProductPageImage image={product.image} />
        <ProductInfo product={product} selectedSize={size} setSize={setSize} />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ProductPage;
