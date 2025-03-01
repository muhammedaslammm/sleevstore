import { createContext, useState } from "react";
import products from "../assets/products";
import { categories } from "../assets/categories";
import useGstPrice from "../customeHooks/useGstPrice";

export let StoreContext = createContext();

const ShopContextProvider = (props) => {
  let [cartItems, setCartItems] = useState([]);
  let [cartFinance, setCartFinance] = useState({
    cartTotal: "",
    productsTotal: "",
    deliveryCharge: "",
  });
  let [userAddress, setUserAddress] = useState({
    name: "Muhammed Aslam",
    address: "Valiyaveedu Palayamkunnu PO Varkala",
    pincode: "695146",
    phone: "9745431920",
  });

  // functions
  const addCartItem = (productid, quantity, size, price) => {
    // deep copying cart
    let cartCopy = structuredClone(cartItems);
    let gstRate = price > 1000 ? 12 : 5;

    // Finding gst and total product price
    let { gstPrice, productFinalPrice } = useGstPrice(price, gstRate);
    let priceLine = `Rs. ${price} + ${gstRate}% (Rs. ${gstPrice}) x ${quantity} =`;

    // total item price (*quantity)
    let itemFinalPrice = productFinalPrice * quantity;

    // cart item
    let newCartItem = {
      productid,
      quantity,
      price,
      size,
      gstRate,
      gstPrice,
      priceLine,
      itemFinalPrice,
    };

    // adding cart item in the cart array.
    cartCopy.push(newCartItem);
    setCartItems(cartCopy);
    console.log("product added to cart");
  };
  const addCartTotal = (cartTotal, productsTotal, deliveryCharge) => {
    setCartFinance({ cartTotal, productsTotal, deliveryCharge });
  };
  const addAddress = (name, address, phone, pincode) => {
    setUserAddress((prevAddress) => {
      return {
        ...prevAddress,
        name,
        address,
        phone,
        pincode,
      };
    });
  };

  const value = {
    currency: "₹",
    delivery_fee: 20,
    phone: "+91 9745431920",
    email: "mysleevestore@gmail.com",
    products,
    categories,
    cartItems,
    addCartItem,
    addCartTotal,
    cartFinance,
    price_ranges: [
      "5000-5500",
      "4000-5000",
      "3000-4000",
      "2000-3000",
      "1000-2000",
      "300-1000",
    ],
    userAddress,
    addAddress,
  };
  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default ShopContextProvider;
