import { useParams, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { StoreContext } from "../context/storeContext";
import useFilteredProducts from "../customeHooks/useFilteredProducts";
import usePagination from "../customeHooks/usePagination";
import ProductCard from "../components/ProductCard";
import SideBar from "../components/SideBar";
import CollectionSearch from "../components/CollectionSearch";
import CollectionSort from "../components/CollectionSort";
import PaginationBlock from "../components/PaginationBlock";

const Collections = () => {
  let { category } = useParams();
  console.log("category:", category);
  const { products } = useContext(StoreContext);
  let [filters, setFilters] = useState({
    category: category,
    price_range: null,
  });
  let [sort, setSort] = useState("Random");
  let [myProducts, setMyProducts] = useState([]);
  let [displayProducts, setDisplayProducts] = useState([]);
  let [pageNumber, setPageNumber] = useState(1);
  let [totalPages, setTotalPages] = useState(0);
  let [sidebar, setSidebar] = useState(false);
  console.log("filters:", filters);

  useEffect(() => {
    let filteredProducts = useFilteredProducts(
      products,
      filters,
      sort,
      category
    );
    console.log("products:", filteredProducts);
    setPageNumber(1);
    setMyProducts(filteredProducts);
  }, [filters, sort]);

  useEffect(() => {
    let { products, totalPages } = usePagination(myProducts, pageNumber);
    setDisplayProducts(products);
    setTotalPages(totalPages);
  }, [pageNumber, myProducts]);

  let handleFilters = (filterField, value) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      [filterField]: previousFilters[filterField] === value ? null : value,
    }));
  };

  return (
    <div className="sleevestore__collections relative mt-[2.41rem] s:mt-[2.4rem] sm:mt-[2.5rem] md:mt-[2.8rem] lg:mt-[3rem] w-[90%] md:w-[85%] xl:w-[77%] mx-auto mb-[2rem]">
      <div className="collections__top z-10  flex w-full justify-between items-center gap-[1rem] bg-bgPageColor border-b border-gray-300 sticky py-[.55rem] s:py-[.6rem] sm:py-[.7rem] lg:py-[.75rem] xl:py-[.65rem] top-[2.4rem] sm:top-[2.8rem] md:top-[2.9rem] lg:top-[3.175rem] xl:top-[3.15rem] ">
        <CollectionSearch />
        <CollectionSort sort={sort} setSort={setSort} />
      </div>
      <div
        className={`collections__section--body flex ${
          sidebar ? "gap-[.8rem]" : "gap-[.1rem] s:gap-[.7rem]"
        } md:gap-[.8rem]`}
      >
        <SideBar
          sidebar={sidebar}
          setSidebar={setSidebar}
          handleFilters={handleFilters}
          path={category}
        />
        <div className="collection__products w-[80%] s:w-full  grid grid-cols-[minmax(11rem,1fr)] s:grid-cols-[repeat(auto-fit,minmax(11rem,1fr))]  sm:grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(12.2rem,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] justify-center  mx-auto mt-[1.5rem] mb-[1.5rem] gap-y-[2rem] gap-x-[.5rem] xl:gap-x-[.8rem]">
          {displayProducts.map((product) => (
            <Link
              key={product.id}
              to={`/collections/${product.category}/${product.id}`}
              className="relative bg-white border border-neutral-400/80 rounded-md"
            >
              <ProductCard
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
                quantity={product.quantity}
              />
            </Link>
          ))}
        </div>
      </div>
      <PaginationBlock
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Collections;
