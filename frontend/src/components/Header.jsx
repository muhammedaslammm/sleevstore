import { Link } from "react-router-dom";

let Header = () => {
  return (
    <header className="header flex w-10/12 mx-auto py-[.5rem] justify-between items-center">
      <div className="header__logo font-semibold text-[1.5rem]">sleevstore</div>
      <ul className="header__middle flex gap-[1.4rem] ">
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
      <div className="header__right flex gap-[1.4rem]">
        <div className="header__wishlist">
          <i class="fa-solid fa-heart"></i>
        </div>
        <div className="header__cart">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="header__profile">
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
