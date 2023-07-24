import { useContext } from "react";
import MyCollegeCard from "./MyCollegeCard";
import { AuthContext } from "../../Providers/AuthProvider";
import useMyCollege from "../../Hooks/useMyCollege";


const MyCollege = () => {
    const [mycollege, , refetch] = useMyCollege();
    console.log(mycollege)
    return (
        <div className="mt-10">
      <h1 className="text-5xl font-bold text-center mb-4 text-[#00425A]">
        My Colleges
      </h1>
      <div className="divider"></div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {mycollege.map((item) => (
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