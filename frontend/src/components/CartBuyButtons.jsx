import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/storeContext";
import { toast } from "sonner";

let CartBuyButtons = ({
  productid,
  size,
  quantity,
  category,
  productQuantity,
  price,
}) => {
  let [productInCart, setProductInCart] = useState(false);
  let { cartItems, addCartItem } = useContext(StoreContext);
  let [isDisabled, setIsDisabled] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    let matchingItem = cartItems.find((item) => item.productid === productid);
    if (matchingItem) setProductInCart(true);
    else setProductInCart(false);
  }, []);

  useEffect(() => {
    if (!productQuantity) setIsDisabled(true);
    else setIsDisabled(false);
  }, []);

  let cartButtonClick = () => {
    if (!productInCart) {
      if (!size) toast.info("Product size not selected");
      else {
        addCartItem(productid, quantity, size, price);
        setProductInCart(true);
        toast.success("Product added to cart");
      }
    } else {
      navigate(`/cart?from=${productid}&category=${category}`);
    }
  };

  return (
    <div className="buttons flex gap-[.2rem] mt-[1rem] sticky bottom-[.5rem] md:self-end bg-white py-[.2rem] text-[.9rem] s:text-[1rem] sm:text-[1.1rem]">
      <button
        onClick={() => cartButtonClick()}
        className={`button--cart capitalize border bg-white border-gray-800/70 w-[50%] py-[.3rem] sm:py-[.4rem]  rounded-[.2rem] ${
          isDisabled ? "cursor-not-allowed opacity-75" : ""
        } `}
        disabled={isDisabled}
      >
        {productInCart ? "view cart" : "add to cart"}
      </button>
      <button
        className={`button--buy capitalize border text-white bg-neutral-900 w-[50%] py-[.3rem] sm:py-[.3rem] rounded-[.2rem] ${
          isDisabled ? "cursor-not-allowed opacity-75" : ""
        }`}
        disabled={isDisabled}
      >
        buy now
      </button>
    </div>
  );
};

export default CartBuyButtons;
