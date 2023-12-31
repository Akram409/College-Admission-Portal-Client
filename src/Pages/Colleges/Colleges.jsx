import useColleges from "../../Hooks/useColleges";
import CollegesCard from "./CollegesCard";

const Colleges = () => {
  const [allColleges, , refetch] = useColleges();
  return (
    <div className="mt-10">
      <h1 className="text-5xl font-bold text-center mb-4 text-[#00425A]">
        All Colleges
      </h1>
      <div className="divider"></div>
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3">
        {allColleges.map((item) => (
          <CollegesCard
            className="lg:gap-3"
            key={item._id}
            item={item}
            refetch={refetch}
          ></CollegesCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
