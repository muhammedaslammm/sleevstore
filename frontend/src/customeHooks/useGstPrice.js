const useGstPrice = (price, rate) => {
  console.log("price for gst:", price, "gst rate:", rate);

  let productPrice = price;
  let gstPrice = productPrice * (rate / 100);
  let productFinalPrice = price + Math.floor(gstPrice);

  return { gstPrice, productFinalPrice };
};
export default useGstPrice;
