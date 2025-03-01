import { useContext } from "react";
import { StoreContext } from "../context/storeContext";

const Footer = () => {
  let { email, phone, address } = useContext(StoreContext);
  return (
    <footer className="footer bg-neutral-900 text-white py-[2rem] ">
      <div className="footer__content w-[90%] mx-auto">
        <div className="footer__top flex flex-col gap-[.8rem] justify-between">
          <div className="footer__sec1">
            <div className="logo font-semibold text-[1rem]">Sleevestore</div>
            <p className="company__details text-[.85rem] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              accusantium odit ratione perferendis esse possimus provident minus
              corporis odio laudantium.
            </p>
          </div>
          <div className="footer__sec2">
            <div className="sections__head uppercase text-[.9rem]">company</div>
            <ul className="text-[.8rem] flex flex-col gap-[.3rem]">
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer__sec3 ">
            <div className="section__head uppercase text-[1rem]">
              get in touch
            </div>
            <ul className="text-[.8rem] flex flex-col gap-[.3rem]">
              <li>{phone}</li>
              <li>{email}</li>
              <li>{phone}</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom my-[1rem] text-center">
          <p className="text-[.6rem]">
            Copyright2024@sleevestore.com-AllRightReserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
