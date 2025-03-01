import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

let Header = () => {
  let [moreVisible, setMoreVisible] = useState(false);
  return (
    <>
      <header className="header fixed left-0 top-0 w-full bg-neutral-900 text-white z-10">
        <div className="header__content w-[90%] mx-auto flex justify-between items-center py-[.3rem] sm:py-[.4rem] md:w-[85%] md:py-[.4rem] lg:py-[.41rem] xl:py-[.42rem] xl:w-[76%]">
          <Link to="/">
            <div className="header__logo font-semibold text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.55rem]">
              sleevstore
            </div>
          </Link>

          <ul className="header__middle hidden sm:flex text-[.9rem] gap-[1.4rem] md:text-[.91rem] md:gap-[1.5rem] lg:text-[1rem] lg:gap-[1.8rem] xl:text-[1.01rem]">
            <li>
              <NavLink to="/">
                <p>Home</p>
                <hr className="w-0 transition-all" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/collections/all-products">
                <p>Collections</p>
                <hr className="w-0 transition-all" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/newarrival">
                <p>New Arrival</p>
                <hr className="w-0 transition-all" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">
                <p>About Us</p>
                <hr className="w-0 transition-all" />
              </NavLink>
            </li>
          </ul>
          <div className="header__right flex gap-[.85rem] text-[.85rem] sm:text-[.9rem] md:text-[1rem] md:gap[.95rem] lg:text-[1.05rem] lg:gap-[1.2rem] xl:text-[1.05rem] xl:gap-[1.3rem]">
            <div className="header__wishlist">
              <i className="fa-solid fa-heart"></i>
            </div>
            <div className="header__cart">
              <Link to="/cart?from=home">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
            <div className="header__profile">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="header__more sm:hidden">
              <i
                className="fa-solid fa-bars"
                onClick={() => setMoreVisible(true)}
              ></i>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`header__more-content fixed overflow-hidden bg-neutral-900 left-0 top-0 bottom-0 z-20 ${
          moreVisible ? "w-full" : "w-0"
        }`}
      >
        <div className="more-content__top text-white flex justify-between items-center w-[90%] mx-auto py-[.3rem]">
          <div className="logo text-[1.2rem] font-semibold">sleevstore</div>
          <i
            class="fa-solid fa-xmark text-[1.1rem] "
            onClick={() => setMoreVisible(false)}
          ></i>
        </div>
        <ul className="more-content__links text-white mt-[1rem] flex flex-col">
          <li className="hover:bg-neutral-800 py-[.5rem] cursor-pointer">
            <Link
              to="/"
              onClick={() => setMoreVisible(false)}
              className="mx-[2rem]  "
            >
              Home
            </Link>
          </li>
          <li className="hover:bg-neutral-800 py-[.5rem] cursor-pointer">
            <Link
              to="/collections/all-products"
              className="mx-[2rem]"
              onClick={() => setMoreVisible(false)}
            >
              Collections
            </Link>
          </li>

          <li className="hover:bg-neutral-800 py-[.5rem] cursor-pointer">
            <Link
              to="/newarrival"
              onClick={() => setMoreVisible(false)}
              className="mx-[2rem] "
            >
              New Arrival
            </Link>
          </li>

          <li className="hover:bg-neutral-800 py-[.5rem] cursor-pointer">
            <Link
              to="/aboutus"
              onClick={() => setMoreVisible(false)}
              className="mx-[2rem] "
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
