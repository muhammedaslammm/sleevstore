import { useContext } from "react";
import { StoreContext } from "../context/storeContext";
const ProductCard = ({ name, price, description, image, quantity }) => {
  let { currency } = useContext(StoreContext);
  return (
    <div className="product__card relative flex flex-col">
      <div className="product__image h-[60%] flex justify-center">
        <img
          src={image}
          alt={`image of ${name}`}
          className="h-full  object-cover w-[55%]"
        />
      </div>
      <div className="product__details p-[1rem]">
        <div className="product__name-and-price text-center s:text-start">
          <div className="product__name font-semibold text-[1rem] lg:text-[1.15rem]">
            {name}
          </div>
          <div className="product__price text-[.95rem] lg:text-[1.11rem]">{`${currency} ${price}`}</div>
        </div>
        <div className="product__description mt-[.4rem] text-[.9rem] lg:text-[1rem] italic text-justify">
          {description}
        </div>
      </div>
      {!quantity ? (
        <div className="out-of-stock absolute top-[.4rem] right-[.4rem] text-red-900 bg-red-200 py-[.2rem] px-[.2rem] text-[.8rem] s:text-[.7rem] md:px-[.4rem]">
          out of stock
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductCard;
