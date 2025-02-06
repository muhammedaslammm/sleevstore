import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import Categories from "../components/Categories";
import Search from "../components/Search";
import { Link } from "react-router-dom";

let Home = () => {
  return (
    <div className="home__page">
      <Search />
      <Link to="/new-arrivals">
        <Banner />
      </Link>

      <Categories />
      <BestSeller />
    </div>
  );
};

export default Home;
