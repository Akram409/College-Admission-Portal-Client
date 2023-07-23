import { useNavigation } from "react-router-dom"
import { BiLike, } from "react-icons/bi";
import { GiRiceCooker, GiCook } from "react-icons/gi";

const CourseDetails = ({ item }) => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spiner />;
  }
  const {
    collegeName,
    admissionDate,
    events,
    researchHistory,
    eventDetails,
    researchWorks,
    researchWorkNumber,
    admissionProcess,
    category,
    img,
    title,
    description,
  } = item;

  return (
    <>
      <div className="hero mt-10 mb-6 text-black">
        <div className="hero-content flex-col lg:flex-row gap-5">
          <img
            className="w-1/2 h-1/2"
            src={img} 
          />
          <div className="space-y-3">
            <h1 className="text-5xl font-bold mb-2">{collegeName}</h1>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <h1 className="text-3xl mb-2"><span className="font-bold">Category: </span>{category}</h1>
            <h1 className="text-3xl mb-2"><span className="font-bold">Category: </span>Admission Date: {admissionDate}</h1>
            <h1 className="text-xl "><span className="font-bold">Admission Process: </span> {admissionProcess}</h1>
            <h1 className="text-xl"><span className="font-bold">Event-title: </span> {events}</h1>
            <h1 className="text-xl"><span className="font-bold">Event-Description: </span> {eventDetails}</h1>
            <h1 className="text-xl"><span className="font-bold">Total Research: </span> {researchWorkNumber}</h1>
            <h1 className="text-xl"><span className="font-bold">Research Work: </span> {researchWorks}</h1>
            <h1 className="text-xl"><span className="font-bold">Research History: </span> {researchHistory}</h1>
            <h1 className="text-xl"><span className="font-bold">About Us: </span> {description}</h1>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
