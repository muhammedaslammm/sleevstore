let ProductPageImage = ({ image }) => {
  return (
    <div className="product__page__images self-center max-w-[25rem] sm:min-w-[26rem] md:min-w-[20rem] lg:min-w-[25rem] h-[29rem] sm:h-[30rem] md:h-[28rem]">
      <img
        src={image}
        alt=""
        className="border border-gray-500/50 w-full h-full object-contain rounded-md"
      />
    </div>
  );
};
export default ProductPageImage;
