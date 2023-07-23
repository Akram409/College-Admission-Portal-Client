import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home | Academiz</title>
      </Helmet>
      <Banner />
      <Courses />
      <Gallery />
    </div>
  );
};

export default Home;
