const AdmissionRow = ({ item, index, refetch }) => {
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
        rating,
      } = item;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{collegeName}</td>
      <td>
      <Link to={`/admission/select/${_id}`}><button className={"btn btn-primary text-white"}>Select</button></Link>
      </td>
    </tr>
  );
};

export default AdmissionRow;
