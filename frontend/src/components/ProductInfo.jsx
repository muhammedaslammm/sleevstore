import CartBuyButtons from "./CartBuyButtons";
import OutofStock from "./Outofstock.jsx";
import { useState } from "react";

let ProductInfo = ({ product, selectedSize, setSize }) => {
  let [quantity, setQuantity] = useState(1);
  let incrementQty = () => {
    setQuantity((prevQty) => {
      if (prevQty !== product.quantity && prevQty < 3) return prevQty + 1;
      return prevQty;
    });
  };
  let decrementQty = () => {
    setQuantity((prevQty) => {
      if (prevQty !== 1) return prevQty - 1;
      else return prevQty;
    });
  };
  console.log("quantity:", quantity);

  return (
    <div className="product__info relative md:h-full">
      <div className="product__top flex items-center md:gap-[.5rem]">
        <div className="tl lg:leading-[1.5rem]">
          <div className="product__name hidden md:block font-medium md:text-[1.6rem] lg:text-[1.7rem] md:leading-[1.9rem]">
            {product.name}
          </div>
          <div className="product__price hidden md:block font-medium md:text-[1.3rem] lg:text-[1.4rem] md:mt-[.3rem]">
            Rs {product.price}
          </div>
        </div>
        {!product.quantity ? <OutofStock style={"hidden md:block"} /> : <></>}
      </div>

      <div className="product__description md:mt-[.5rem]">
        <div className="description__head capitalize text-[1rem] s:text-[1.15rem] sm:text-[1.2rem] md:text-[1.15rem] lg:text-[1.2rem] font-medium">
          description
        </div>
        <div className="description text-[.9rem] s:text-[1.05rem] sm:text-[1.1rem] text-gray-800 leading-[1rem] s:leading-[1.2rem]">
          {product.description}
        </div>
      </div>
      <div className="sizes mt-[.5rem] sm:mt-[.8rem] flex flex-col gap-[.3rem] sm:gap-[.5rem] md:gap-[.4rem]">
        <div className="sizes__head capitalize text-[1rem] s:text-[1.15rem] sm:text-[1.2rem] md:text-[1.15rem] lg:text-[1.2rem] font-medium">
          sizes
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(3rem,1fr))] gap-[.5rem]">
          {product?.sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => setSize(size)}
              className={`font-normal border border-gray-900/50 text-[.8rem] sm:text-[1rem] py-[.1rem] s:py-[.15rem] hover:bg-neutral-800 hover:text-white active:bg-neutral-900 ${
                size === selectedSize ? "bg-neutral-800 text-white" : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        {product.quantity ? (
          <div className="product__quantity my-[.5rem]">
            <div className="quantity__head capitalize text-[1rem] s:text-[1.15rem] sm:text-[1.2rem] md:text-[1.15rem] lg:text-[1.2rem]">
              select stock
            </div>
            <div className="stock__management flex items-center mt-[.5rem] gap-[1rem]">
              <button
                onClick={decrementQty}
                className="border border-gray-900/60 w-[2rem] text-center text-[1.3rem]"
              >
                -
              </button>
              <div className="quantity inline-block">{quantity}</div>
              <button
                onClick={incrementQty}
                className="border border-gray-900/60 w-[2rem] text-center text-[1.3rem]"
              >
                +
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <CartBuyButtons
        productid={product.id}
        size={selectedSize}
        quantity={quantity}
        category={product.category}
        productQuantity={product.quantity}
        price={product.price}
      />
    </div>
  );
};

export default ProductInfo;
