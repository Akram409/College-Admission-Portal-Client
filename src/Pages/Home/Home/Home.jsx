import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";
import ClientReview from "../Review/ClientReview";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home | Academiz</title>
      </Helmet>
      <Banner />
      <Courses />
      <Gallery />
      <Research />
      <ClientReview />
    </div>
  );
};

export default Home;
