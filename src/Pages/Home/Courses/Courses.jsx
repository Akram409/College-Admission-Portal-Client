import CoursesCard from "./CoursesCard";
import useCourses from "../../../Hooks/useCourses";



const Courses = () => {
  const [courses,,refetch] = useCourses();
  return (
    <div className="mt-20 grid grid-cols-3">
      {courses.map((item) => (
        <CoursesCard className="lg:gap-3" key={item._id} item={item} refetch={refetch}></CoursesCard>
      ))}
  </div>
  );
}

export default Courses;
