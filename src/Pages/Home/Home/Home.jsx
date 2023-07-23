import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home | Academiz</title>
      </Helmet>
      <Banner />
      <Courses />
    </div>
  );
};

export default Home;
