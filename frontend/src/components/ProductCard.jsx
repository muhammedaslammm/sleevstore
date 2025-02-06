import { useContext } from "react";
import { StoreContext } from "../context/storeContext";
const ProductCard = ({ name, price, description, image }) => {
  let { currency } = useContext(StoreContext);
  return (
    <div className="product__card flex flex-col border border-neutral-400/80 rounded-md">
      <div className="product__image h-[60%] flex justify-center">
        <img
          src={image}
          alt={`image of ${name}`}
          className="h-full  object-cover w-[55%]"
        />
      </div>
      <div className="product__details p-[1rem]">
        <div className="product__name-and-price text-center s:text-start">
          <div className="product__name font-semibold text-[1rem]">{name}</div>
          <div className="product__price text-[.95rem]">{`${currency} ${price}`}</div>
        </div>
        <div className="product__description mt-[.4rem] text-[.9rem] italic text-justify">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
