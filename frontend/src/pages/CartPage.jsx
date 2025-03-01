import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/storeContext";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

const CartPage = () => {
  let { cartItems, addCartTotal } = useContext(StoreContext);
  let [productsTotal, setProductsTotal] = useState(0);
  let [deliveryCharge, setDeliveryCharge] = useState(null);
  let [cartTotal, setCartTotal] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    if (productsTotal > 2500) {
      setDeliveryCharge(30);
    } else {
      setDeliveryCharge(0);
    }
  }, [productsTotal]);

  useEffect(() => {
    setCartTotal(0);
    setCartTotal(productsTotal + deliveryCharge);
  }, [deliveryCharge, productsTotal]);

  const handleCheckout = () => {
    addCartTotal(cartTotal, productsTotal, deliveryCharge);
    navigate("/checkout");
  };

  return (
    <div className="cart__page w-[90%] min-h-[90vh] mx-auto pt-[3.2rem]">
      {cartItems.length === 0 ? (
        <div className="leading-[1.3rem] h-full">
          <h1 className="font-medium">Cart is Empty</h1>
          <p className="">Add more products to order combined from cart</p>
        </div>
      ) : (
        <div className="cart-content relative h-full flex flex-col justify-between">
          <div className="cart__top">
            <div className="cart__items flex flex-col gap-[.5rem] pb-[1rem] border-b-[.05rem] border-black/25">
              {cartItems.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  setProductsTotal={setProductsTotal}
                />
              ))}
            </div>
            <div className="cart__summary__box mt-[1rem] p-[.5rem] border border-neutral-500/50 rounded-[.3rem] bg-gray-900/10">
              <div className="box__head capitalize text-[.85rem] font-medium">
                cart summary
              </div>
              <CartSummary
                items={cartItems}
                productsTotal={productsTotal}
                deliveryCharge={deliveryCharge}
                cartTotal={cartTotal}
              />
            </div>
          </div>
          <div className="section__proceed sticky bottom-0 bg-white flex justify-between items-end border-t-[.1rem] mt-[.5rem] border-neutral-400/40 py-[.8rem]">
            <div className="cart__total">
              Total: <span className="font-medium">Rs {cartTotal}/-</span>
            </div>
            <button
              onClick={() => handleCheckout()}
              className="button--checkout text-[.9rem] font-medium text-white bg-neutral-950 capitalize px-[.8rem] py-[.2rem] rounded-[.1rem]"
            >
              checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
