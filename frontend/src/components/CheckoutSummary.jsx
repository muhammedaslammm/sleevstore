import { useContext } from "react";
import { StoreContext } from "../context/storeContext";

const CheckoutSummary = () => {
  let { cartFinance } = useContext(StoreContext);
  return (
    <div className="checkout__summary text-[.8rem]  bg-neutral-400/40 p-[.65rem] rounded-[.2rem]">
      <div className="total--products flex justify-between">
        <div className="summary__note capitalize">products total</div>
        <div className="summary__total">{cartFinance.productsTotal}</div>
      </div>
      <div className="total--delivery flex justify-between">
        <div className="summary__note capitalize">delivery charge</div>
        <div className="summary__total">{cartFinance.deliveryCharge}</div>
      </div>
      <hr className="my-[.4rem]" />
      <div className="total--checkout__total flex justify-between font-medium">
        <div className="summary__note capitalize">total amount</div>
        <div className="summary__total">{cartFinance.cartTotal}</div>
      </div>
    </div>
  );
};
export default CheckoutSummary;
