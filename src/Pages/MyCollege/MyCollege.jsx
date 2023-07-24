import { useContext } from "react";
import MyCollegeCard from "./MyCollegeCard";
import { AuthContext } from "../../Providers/AuthProvider";
import useMyCollege from "../../Hooks/useMyCollege";
import { useNavigation } from "react-router-dom";

const MyCollege = () => {
    const [mycolleges, , refetch] = useMyCollege();
    const {user,loading} = useContext(AuthContext);

    const navigation = useNavigation();
  
    // if (navigation.state === "loading") {
    //   return <progress className="progress w-56"></progress>;
    // }

    console.log(mycolleges)
    return (
        <div className="mt-10">
      <h1 className="text-5xl font-bold text-center mb-4 text-[#00425A]">
        My Colleges
      </h1>
      <div className="divider"></div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {mycolleges.map((item) => (
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