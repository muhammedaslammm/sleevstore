import { useEffect, useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../context/storeContext";
import useProduct from "../customeHooks/useProduct";

const CheckoutItem = ({ item }) => {
  let [product, setProduct] = useState(null);

  useEffect(() => {
    let matchingProduct = useProduct(item.productid);
    if (matchingProduct) setProduct(matchingProduct);
  });

  return product ? (
    <div className="checkout__item flex justify-between gap-[.5rem] border border-neutral-500/45 rounded-[.2rem] text-[.8rem] p-[.5rem] leading-[1rem]">
      <div className="item__left">
        <div className="item__name">{product.name}</div>
        <div className="item__brand">{product.brand}</div>
        <div className="item__totalPrice text-[.8rem] text-gray-800 my-[.2rem]">
          <span className="font-medium">Rs {item.itemFinalPrice}</span>
        </div>
        <div className="item__qtyandsize flex gap-[.5rem] mt-[.5rem] text-[.7rem] text-gray-800">
          <div className="item__quantity">Quantity: {item.quantity}</div>
          <div className="item__size">Size: {item.size}</div>
        </div>
      </div>
      <div className="item__right">
        <img
          src={product.image}
          alt="product image"
          className="w-[3rem] h-[4rem] object-contain "
        />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CheckoutItem;
