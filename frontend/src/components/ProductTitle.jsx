import OutofStock from "./Outofstock";

let ProductTitle = ({ title, price, quantity }) => {
  return (
    <div className="flex justify-between items-center gap-[1rem] md:hidden">
      <div className="product__title__info leading-[1.1rem] s:leading-[1.2rem] sm:leading-[1.55rem] md:hidden">
        <div className="title text-[1.2rem] font-medium s:text-[1.4rem] sm:text-[1.7rem] leading-[1.5rem]">
          {title}
        </div>
        <div className="price text-[1.1rem] s:text-[1.3rem] sm:text-[1.4rem] font-medium my-[.3rem]">
          Rs {price}/-
        </div>
      </div>
      {!quantity ? <OutofStock style={"md:hidden"} /> : <></>}
    </div>
  );
};

export default ProductTitle;
