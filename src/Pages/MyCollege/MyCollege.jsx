import { useContext } from "react";
import useColleges from "../../Hooks/useColleges";
import MyCollegeCard from "./MyCollegeCard";
import { AuthContext } from "../../Providers/AuthProvider";

const MyCollege = () => {
    const [allColleges, , refetch] = useColleges();
    const {user,loading} = useContext(AuthContext);
    
    return (
        <div className="mt-10">
      <h1 className="text-5xl font-bold text-center mb-4 text-[#00425A]">
        All Colleges
      </h1>
      <div className="divider"></div>
      <div className="mt-20 grid grid-cols-3">
        {allColleges.map((item) => (
          <MyCollegeCard
            className="lg:gap-3"
            key={item._id}
            item={item}
            refetch={refetch}
          ></MyCollegeCard>
        ))}
      </div>
    </div>
    );
};

export default MyCollege;