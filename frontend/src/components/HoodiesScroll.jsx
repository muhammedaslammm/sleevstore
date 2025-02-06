import Title from "./Title";
import { useState, useEffect, useContext } from "react";
import { StoreContext } from "../context/storeContext";
import ProductCard from "./ProductCard";

const HoodiesScrollSection = () => {
  let [myhoodies, setMyHoodies] = useState([]);
  let { hoodies } = useContext(StoreContext);
  useEffect(() => {
    setMyHoodies(hoodies);
  }, []);

  return (
    <div className="hoodies__section--scroll">
      <Title text1={"sleevestore"} text2={"Hoodies"} />
      <p>Check some of ours hoodies that is meant for you.</p>
      <div className="hoodies__section overflow-auto flex gap-[1rem]">
        {myhoodies.map((hoodie, index) => (
          <ProductCard
            key={index}
            name={hoodie.name}
            price={hoodie.price}
            description={hoodie.description}
            imageID={hoodie.imageID}
          />
        ))}
      </div>
    </div>
  );
};

export default HoodiesScrollSection;
