import { useEffect, useState } from "react";
import { useNavigation, useParams } from "react-router-dom";
import Spiner from "../../Shared/Spiner/Spiner";
import CourseDetails from "./CourseDetails";

const CourseDetailCard = () => {
  const { id } = useParams();
  const navigation = useNavigation();
  const [item, setItem] = useState([]);
  console.log(id)
  useEffect(() => {
    fetch(`https://college-admission-server-cyan.vercel.app/coursedetail/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  if (navigation.state === "loading") {
    return <Spiner />;
  }
  console.log(item)
  return (
    <div className="container mx-auto">{<CourseDetails item={item} />}</div>
  );
};

export default CourseDetailCard;
