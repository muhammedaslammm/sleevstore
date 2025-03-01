import banner_image from "../assets/images/sleevstor_landing.jpg";
import banner_image2 from "../assets/images/sleevstor_landing2.jpg";
import banner_image3 from "../assets/images/sleevstore__landing.jpg";
let Banner = () => {
  return (
    <div className="homepage__banner w-[90%] md:w-[85%] xl:w-[76%] mx-auto mt-[.8rem] sm:mt-[4rem] md:mt-[4.5rem] relative  rounded-md hover:shadow-neutral-900 transition-all cursor-pointer ">
      <img src={banner_image3} alt="banner_image" className="rounded-md" />
      <div className="banner__text absolute flex flex-col items-end top-[.5rem] s:top-[.7rem] xl:top-[3rem] right-[.5rem] xl:right-[1.7rem] leading-[.9rem] s:leading-[1rem] lg:leading-[1.9rem] xl:leading-[2.4rem]">
        <h2 className="text-[.6rem] s:text-[.75rem] sm:text-[.75rem] md:text-[.85rem] lg:text-[1.4rem] xl:text-[1.8rem]">
          looking for the best five-sleeves?
        </h2>
        <h1 className="font-semibold text-right text-[.9rem] s:text-[1.1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[2rem] xl:text-[2.8rem]  text-neutral-800 capitalize">
          New five-sleeves are here!
        </h1>
        <p className="w-[3.5rem] rounded-[.1rem] text-center text-[.5rem] text-white bg-neutral-900  px-[.5rem] mt-[.25rem] s:mt-[.4rem] ">
          shop now
        </p>
      </div>
    </div>
  );
};
export default Banner;
