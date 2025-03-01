import { useEffect, useState } from "react";
import useProduct from "../customeHooks/useProduct";

const CartSummary = ({ items, deliveryCharge, productsTotal, cartTotal }) => {
  let [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    let products = items.map((item) => useProduct(item.productid));
    setCartProducts(products);
  }, []);

  return (
    <div className="cart-summary text-[.8rem] mt-[.2rem] flex flex-col gap-[.25rem] ">
      <div className="product__items flex justify-between items-end">
        <ul className="names leading-[1.1rem]">
          {cartProducts.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        <div className="price text-[.85rem]">Rs {productsTotal}</div>
      </div>
      <div className="delivery__charge flex justify-between items-end">
        <div className="capitalize">delivery charge</div>
        <div className="price text-[.85rem]">Rs {deliveryCharge}</div>
      </div>
      <div className="cart__total flex justify-between items-center text-[.9rem] font-medium mt-[.5rem]">
        <div className="total__note">Total</div>
        <div className="amount__total">{cartTotal}</div>
      </div>
    </div>
  );
};

export default CartSummary;
