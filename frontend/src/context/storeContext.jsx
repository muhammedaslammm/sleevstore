import { createContext } from "react";
import products from "../assets/products";
import { categories } from "../assets/categories";

export let StoreContext = createContext();

const ShopContextProvider = (props) => {
  const value = {
    currency: "₹",
    delivery_fee: 20,
    address: "Premount Building, Varkala Paripally Road, Varkala, Trivandrum",
    phone: "+91 9745431920",
    email: "mysleevestore@gmail.com",
    products,
    categories,
  };
  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default ShopContextProvider;
