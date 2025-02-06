const CategoryCard = ({ category }) => {
  return (
    <div className="category__card  rounded-lg shadow-neutral-600 shadow-md h-full">
      <div className="category__image w-full h-full">
        <img
          src={category.image_url}
          alt=""
          className=" object-cover rounded-md w-full h-full"
        />
      </div>
      <p className="absolute z-10 bottom-[1rem] text-[.95rem] sm:text-[1.05rem] md:text-[1.2rem] font-semibold text-white bg-black/90 w-full text-center capitalize py-[.1rem]">
        {category.category_name}
      </p>
    </div>
  );
};
export default CategoryCard;
