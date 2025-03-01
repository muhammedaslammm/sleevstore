let OutofStock = ({ style }) => {
  return (
    <div
      className={`product__availability font-medium rounded-[.2rem] text-[.8rem] s:text-[1rem] text-red-900 bg-red-200 py-[.2rem] px-[.4rem] sm:px-[.8rem] md:self-start md:w-[10rem] text-center ${style}`}
    >
      out of stock
    </div>
  );
};

export default OutofStock;
