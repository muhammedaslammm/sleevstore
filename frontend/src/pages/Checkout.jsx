import { useContext, useState } from "react";
import { StoreContext } from "../context/storeContext";
import CartAddress from "../components/CartAddress";
import { useContext } from "react";
import { StoreContext } from "../context/storeContext";
import CheckoutItem from "../components/CheckoutItem";
import CheckoutSummary from "../components/CheckoutSummary";
import CheckoutPayments from "../components/CheckoutPayments";

const Checkout = () => {
  let { userAddress } = useContext(StoreContext);
  let { cartItems } = useContext(StoreContext);
  let [selectedPayment, setSelectedPayment] = useState("cod");

  return (
    <div className="checkout__page relative mt-[2.7rem] mb-[1.5rem] w-[90%] mx-auto">
      <div className="checkout__left flex flex-col gap-[.8rem] ">
        <div className="section__address flex flex-col gap-[.2rem] border border-neutral-400/50 rounded-[.2rem] p-[.5rem]">
          <p className="section__head text-[.8rem] font-medium">Address</p>
          <CartAddress userAddress={userAddress} />
        </div>

        <div className="purchased__products flex flex-col gap-[.2rem] border border-neutral-400/50 rounded-[.2rem] p-[.5rem]">
          <p className="section__head text-[.8rem] font-medium">Products</p>
          <div className="products__container flex flex-col gap-[.5rem]">
            {/* should i need to build separate component for product item cards? */}
            {cartItems.map((item, index) => (
              <CheckoutItem key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="section--payment__options flex flex-col gap-[.2rem] border border-neutral-400/50 rounded-[.2rem] p-[.5rem]">
          <CheckoutPayments
            selectedPayment={selectedPayment}
            setSelectedPayment={setSelectedPayment}
          />
        </div>
      </div>
      <div className="checkout__right bg-white sticky bottom-0 mt-[1rem] flex flex-col gap-[.2rem] border border-neutral-400/50 rounded-[.2rem] p-[.5rem] pb-[.8rem]">
        <p className="section__head text-[.8rem] font-medium">Summary</p>
        <CheckoutSummary />
        <button className="capitalize text-[.8rem] bg-red-700 text-white font-medium px-[.5rem] py-[.15rem] rounded-[.1rem] w-[6rem] mt-[.2rem] self-end">
          place order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
