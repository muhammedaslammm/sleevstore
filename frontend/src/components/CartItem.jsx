import { useState, useEffect } from "react";
import useProduct from "../customeHooks/useProduct";

const PurchasedProduct = ({ item, setProductsTotal }) => {
  let [product, setProduct] = useState(null);

  useEffect(() => {
    let product = useProduct(item.productid);
    setProduct(product);
  }, []);

  useEffect(() => {
    if (product) {
      setProductsTotal((prevTotal) => prevTotal + item.itemFinalPrice);
    }
  }, [product]);

  return product ? (
    <div className="cart__item border border-neutral-500/50 rounded-[.3rem] p-[.5rem]">
      <div className="item__top flex justify-between">
        <div className="top__left w-9/12 text-[.9rem]">
          <div className="top__left--up leading-[1.2rem]">
            <div className="name  font-medium">{product.name}</div>
            <div className="price  font-normal text-[.75rem]">
              {item.priceLine}{" "}
              <span className="font-medium text-[.8rem]">
                {item.itemFinalPrice}
              </span>
            </div>
          </div>
          <div className="top__left--down flex items-center mt-[.2rem]">
            <p className="capitalize text-[.85rem]">qty: {item.quantity}</p>
          </div>
        </div>
        <div className="top__right w-3/12 h-[4rem]">
          <img
            src={product.image}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <div className="item__bottom mt-[.8rem]">
        <p className="description leading-[1.1rem] text-[.8rem] text-black/70">
          {product.description}
        </p>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default PurchasedProduct;
