import useColleges from "../../Hooks/useColleges";
import AdmissionRow from "./AdmissionRow";

const Admission = () => {
  const [allClasses, , refetch] = useColleges()
  return (
    <div className="container mx-auto pt-28">
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          <thead>
            <tr className={`text-center`}>
              <th>SL.</th>
              <th>College Name</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {allClasses.map((item, idx) => (
              <AdmissionRow
                key={item._id}
                item={item}
                refetch={refetch}
                index={idx}
              ></AdmissionRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admission;
