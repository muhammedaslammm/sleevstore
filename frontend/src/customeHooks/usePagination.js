const usePagination = (products, pageNumber) => {
  let pageLimit = 6;
  let totalPages = Math.ceil(products.length / pageLimit);

  let start = (pageNumber - 1) * pageLimit;
  let end = pageLimit * pageNumber;
  let productsPerPage = products.slice(start, end);
  return { products: productsPerPage, totalPages };
};

export default usePagination;
