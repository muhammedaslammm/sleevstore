import banner_image from "../assets/images/sleevstor_landing.jpg";
import banner_image2 from "../assets/images/sleevstor_landing2.jpg";
import banner_image3 from "../assets/images/sleevstore__landing.jpg";
let Banner = () => {
  return (
    <div className="homepage__banner w-[90%] md:w-[85%] mx-auto mt-[.8rem] sm:mt-[4rem] md:mt-[4.5rem] relative shadow-lg shadow-neutral-500 rounded-md hover:shadow-neutral-900 transition-all cursor-pointer ">
      <img src={banner_image3} alt="banner_image" className="rounded-md" />
      <div className="banner__text absolute top-[.9rem] right-[1.2rem] leading-[1.05rem]">
        <h2 className="text-[.65rem] text-right sm:text-[.75rem] md:text-[.85rem]">
          looking for the best five-sleeves?
        </h2>
        <h1 className="font-semibold text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-neutral-800 capitalize">
          New five-sleeves are here!
        </h1>
      </div>
    </div>
  );
};
export default Banner;
