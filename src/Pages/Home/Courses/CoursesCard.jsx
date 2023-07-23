import { Link } from "react-router-dom";

const CoursesCard = ({ item }) => {
  const {
    _id,
    collegeName,
    admissionDate,
    researchHistory,
    img,
    title,
    events
  } = item;

  // const {
  //   collegeName,
  //   admissionDate,
  //   events,
  //   researchHistory,
  //   sportsData,
  //   category,
  //   img,
  //   title,
  //   description,
  //   link,
  // } = item;
  return (
    <div className="card mx-3 bg-[#F0F7FF] shadow-2xl text-center">
      <figure className="img-fluid w-full">
        <img src={img} className="w-full h-72" alt="Image Alt" />
      </figure>
      <div className="card-body mx-auto text-black ">
        <h2 className="text-3xl font-bold pb-1">{collegeName}</h2>
        <h2 className="text-xl font-bold pb-1">Course Title: {title}</h2>
        <div className="flex gap-2 items-center justify-center">
          <span className="text-lg font-bold">Admission Date: {admissionDate}</span>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <span className="text-lg font-bold">Events: {events}</span>
        </div>
        <div className="">
          <span className="text-lg">{researchHistory}</span>
        </div>
        <div className="card-actions justify-center pt-2">
        
          <Link to={`/coursedetail/${_id}`}><button className={"btn btn-primary text-white"}>View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
