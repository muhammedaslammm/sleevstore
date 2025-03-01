import products from "../assets/products";

let useProduct = (productid) => {
  console.log("productid:", productid);
  let product = products.find((product) => product.id === Number(productid));
  return product;
};

export default useProduct;
