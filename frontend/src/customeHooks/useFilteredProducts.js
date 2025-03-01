let useFilteredProducts = (products, filters, sort, path) => {
  console.log("sort:", sort);

  let filteredProducts = products.filter(
    (product) =>
      (!filters.category ||
        filters.category === "all-products" ||
        product.category === filters.category) &&
      (!filters.price ||
        (product.price >= Number(filters.price.split("-")[0]) &&
          product.price <= Number(filters.price.split("-")[1])))
  );
  switch (sort) {
    case "Price Low to High":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "Price High to Low":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      filteredProducts.sort((a, b) => a.price - a.price);
  }

  return filteredProducts;
};

export default useFilteredProducts;
