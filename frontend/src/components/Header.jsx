import { Link } from "react-router-dom";
import { useState } from "react";

let Header = () => {
  let [moreVisible, setMoreVisible] = useState(false);
  return (
    <>
      <header className="header fixed left-0 top-0 w-full bg-black text-white">
        <div className="header__content w-[80%] mx-auto flex justify-between items-center py-[.3rem]">
          <div className="header__logo font-semibold text-[1.2rem]">
            sleevstore
          </div>
          <ul className="header__middle hidden sm:flex gap-[1.4rem] ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/newarrival">New Arrivals</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
          <div className="header__right flex gap-[.85rem] text-[.85rem]">
            <div className="header__wishlist">
              <i className="fa-solid fa-heart"></i>
            </div>
            <div className="header__cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="header__profile">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="header__more">
              <i
                className="fa-solid fa-bars"
                onClick={() => setMoreVisible(true)}
              ></i>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`header__more-content fixed overflow-hidden bg-neutral-900 left-0 top-0 bottom-0 ${
          moreVisible ? "w-full" : "w-0"
        }`}
      >
        <div className="more-content__top text-white flex justify-between items-center w-[80%] mx-auto py-[.3rem]">
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
              className="mx-[3.5rem]  "
            >
              Home
            </Link>
          </li>

          <li className="hover:bg-neutral-800 py-[.5rem] cursor-pointer">
            <Link
              to="/newarrival"
              onClick={() => setMoreVisible(false)}
              className="mx-[3.5rem] "
            >
              New Arrival
            </Link>
          </li>

          <li className="hover:bg-neutral-800 py-[.5rem] cursor-pointer">
            <Link
              to="/aboutus"
              onClick={() => setMoreVisible(false)}
              className="mx-[3.5rem] "
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
