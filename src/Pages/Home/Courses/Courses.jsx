import Slider from "react-slick";
import CoursesCard from "./CoursesCard";
import useCourses from "../../../Hooks/useCourses";

const courses = [
    {
      category: "Sciences",
      title: "Biochemistry",
      description:
        "Seamlessly visualize quality intellectual capital without superior collaboration and idea tically",
      link: "/single-courses",
      img: "../../../assets/img/bg/couress-img-1.jpg",
    },
    {
      category: "Economics",
      title: "Major in Economics",
      description:
        "Seamlessly visualize quality intellectual capital without superior collaboration and idea tically",
      link: "/single-courses",
      img: "../../../assets/img/bg/couress-img-2.jpg",
    },
    {
      category: "Media",
      title: "Business Media",
      description:
        "Seamlessly visualize quality intellectual capital without superior collaboration and idea tically",
      link: "/single-courses",
      img: "../../../assets/img/bg/couress-img-3.jpg",
    },
    {
      category: "Public",
      title: "Public Administration",
      description:
        "Seamlessly visualize quality intellectual capital without superior collaboration and idea tically",
      link: "/single-courses",
      img: "../../../assets/img/bg/couress-img-4.jpg",
    },
    {
      category: "Sciences",
      title: "Biotechnology",
      description:
        "Seamlessly visualize quality intellectual capital without superior collaboration and idea tically",
      link: "/single-courses",
      img: "../../../assets/img/bg/couress-img-5.jpg",
    },
    {
      category: "Finance",
      title: "Corporate Finance",
      description:
        "Seamlessly visualize quality intellectual capital without superior collaboration and idea tically",
      link: "/single-courses",
      img: "../../../assets/img/bg/couress-img-6.jpg",
    },
  ];

function Courses() {

  const [courses,,refetch] = useCourses();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-20">
    <Slider className="" {...settings}>
      {courses.map((item) => (
        <CoursesCard className="lg:gap-3" key={item._id} item={item} refetch={refetch}></CoursesCard>
      ))}
    </Slider>
  </div>
  );
}

export default Courses;
